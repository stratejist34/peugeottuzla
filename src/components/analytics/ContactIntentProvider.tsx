'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, MessageCircle, Phone, X } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

type ContactType = 'phone' | 'whatsapp';

type ContactIntentPayload = {
    type: ContactType;
    href: string;
    source?: string;
};

type ContactIntentContextValue = {
    openContactIntent: (payload: ContactIntentPayload) => void;
};

const ContactIntentContext = createContext<ContactIntentContextValue | null>(null);

export const useContactIntent = () => {
    const ctx = useContext(ContactIntentContext);
    if (!ctx) {
        throw new Error('useContactIntent must be used within ContactIntentProvider');
    }
    return ctx;
};

const getEventNames = (type: ContactType) => {
    if (type === 'phone') {
        return {
            intent: 'tel_arama_niyeti',
            success: 'tel_aramasi',
            cancel: 'tel_vazgecildi'
        };
    }
    return {
        intent: 'whatsapp_yazma_niyeti',
        success: 'whatsapp_yazanlar',
        cancel: 'whatsapp_vazgecildi'
    };
};

const ContactIntentProvider = ({ children }: { children: React.ReactNode }) => {
    const [intent, setIntent] = useState<ContactIntentPayload | null>(null);

    const openContactIntent = useCallback((payload: ContactIntentPayload) => {
        const eventNames = getEventNames(payload.type);
        trackEvent(eventNames.intent, { source: payload.source });
        setIntent(payload);
    }, []);

    const closeWithCancel = useCallback((reason?: string) => {
        if (!intent) return;
        const eventNames = getEventNames(intent.type);
        if (intent.type === 'whatsapp') {
            trackEvent(eventNames.cancel, { source: intent.source, reason });
        } else {
            trackEvent(eventNames.cancel, { source: intent.source, reason });
        }
        setIntent(null);
    }, [intent]);

    const handleConfirm = useCallback(() => {
        if (!intent) return;
        const eventNames = getEventNames(intent.type);
        if (intent.type === 'whatsapp') {
            trackEvent(eventNames.success, { source: intent.source });
        } else {
            trackEvent(eventNames.success, { source: intent.source });
        }
        if (intent.type === 'phone') {
            window.location.href = intent.href;
        } else {
            window.open(intent.href, '_blank');
        }
        setIntent(null);
    }, [intent]);

    useEffect(() => {
        if (!intent) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeWithCancel('escape');
            }
        };
        document.addEventListener('keydown', onKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [intent, closeWithCancel]);

    const value = useMemo(() => ({ openContactIntent }), [openContactIntent]);

    const isOpen = !!intent;
    const isPhone = intent?.type === 'phone';

    return (
        <ContactIntentContext.Provider value={value}>
            {children}
            <AnimatePresence>
                {isOpen && intent && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => closeWithCancel('backdrop')}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[200]"
                        />
                        <div className="fixed inset-0 z-[201] flex items-center justify-center px-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.98 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                role="dialog"
                                aria-modal="true"
                                className="w-full max-w-xl bg-[#0a0c10] border border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden"
                            >
                                <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-2xl bg-amber-custom/10 flex items-center justify-center text-amber-custom">
                                            <AlertTriangle size={18} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg leading-tight">Bu hat yetkili servis değildir</p>
                                            <p className="text-gray-500 text-xs">Lütfen aşağıdaki bilgileri onaylayın</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => closeWithCancel('close_button')}
                                        className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
                                        aria-label="Kapat"
                                    >
                                        <X size={16} className="text-gray-300" />
                                    </button>
                                </div>

                                <div className="p-6 md:p-8 space-y-6">
                                    <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                                        <p>
                                            <span className="text-white font-semibold">Tuzla İçmeler Oto San. Sitesinde ÖZEL SERVİS hizmeti veriyoruz.</span>
                                        </p>
                                        <p>
                                            <span className="text-amber-custom font-black text-base">Yetkili Servis Değiliz.</span>
                                        </p>
                                        <p>
                                            <span className="text-white font-semibold">Bölge odağımız: Tuzla, Pendik ve Gebze.</span>
                                        </p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-[11px] text-gray-400">
                                        Uygunsanız devam edin, değilseniz vakit kaybetmeyin.
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                                        <button
                                            onClick={() => closeWithCancel('cancel')}
                                            className="flex-1 px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all"
                                        >
                                            Vazgeç
                                        </button>
                                        <button
                                            onClick={handleConfirm}
                                            className="flex-1 px-5 py-3 rounded-xl bg-amber-custom text-black text-sm font-black tracking-wide flex items-center justify-center gap-2 hover:bg-amber-custom/90 transition-all"
                                        >
                                            {isPhone ? <Phone size={16} /> : <MessageCircle size={16} />}
                                            {isPhone ? 'Aramayı Başlat' : 'WhatsApp\'a Geç'}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </ContactIntentContext.Provider>
    );
};

export default ContactIntentProvider;
