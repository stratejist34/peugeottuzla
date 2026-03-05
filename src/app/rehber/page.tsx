import wpContent from '@/data/wp_content.json';
import RehberClient from './RehberClient';

export const dynamic = 'force-static';

export default function BlogIndexPage() {
    const posts = wpContent
        .filter((item) => item.type === 'post')
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return <RehberClient posts={posts} />;
}
