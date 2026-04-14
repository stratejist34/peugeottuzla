import { NextRequest, NextResponse } from 'next/server';
import { GA_MEASUREMENT_ID } from '@/lib/gtag';

export const runtime = 'edge';

type TrackPayload = {
    name?: string;
    params?: Record<string, unknown>;
    client_id?: string;
};

const parseGaCookie = (cookie: string | null): string | null => {
    if (!cookie) return null;
    const match = cookie.match(/_ga=GA\d\.\d\.(\d+\.\d+)/);
    return match ? match[1] : null;
};

const randomClientId = () =>
    `${Math.floor(Math.random() * 1e10)}.${Math.floor(Date.now() / 1000)}`;

export async function POST(req: NextRequest) {
    const apiSecret = process.env.GA4_API_SECRET;
    if (!apiSecret) {
        return new NextResponse(null, { status: 204 });
    }

    let payload: TrackPayload;
    try {
        payload = await req.json();
    } catch {
        return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
    }

    const eventName = payload.name;
    if (!eventName || typeof eventName !== 'string') {
        return NextResponse.json({ error: 'missing_name' }, { status: 400 });
    }

    const clientId = payload.client_id || parseGaCookie(req.headers.get('cookie')) || randomClientId();
    const userAgent = req.headers.get('user-agent') || '';

    const body = {
        client_id: clientId,
        events: [
            {
                name: eventName,
                params: {
                    ...(payload.params || {}),
                    engagement_time_msec: 1,
                    transport_type: 'server',
                },
            },
        ],
    };

    try {
        await fetch(
            `https://www.google-analytics.com/mp/collect?measurement_id=${GA_MEASUREMENT_ID}&api_secret=${apiSecret}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': userAgent,
                },
                body: JSON.stringify(body),
            }
        );
    } catch {
        return new NextResponse(null, { status: 502 });
    }

    return new NextResponse(null, { status: 204 });
}
