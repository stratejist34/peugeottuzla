'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone } from 'lucide-react';
import MagneticButton from './MagneticButton';

interface QuickPriceFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuickPriceForm: React.FC<QuickPriceFormProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Periyodik Bakım'
    });

    const serviceOptions = [
        'Periyodik Bakım',
        'Arıza Tespiti',
        'Triger Değişimi',
        'Şanzıman Bakım',
        'Motor Tamiri',
        'Fren Sistemi',
        'Klima Bakım',
        'Yol Yardım',
        'Diğer'
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // WhatsApp ile yönlendir
        const message = `Merhaba, ${formData.service} için fiyat teklifi almak istiyorum.\n\nAdım: ${formData.name}\nTelefon: ${formData.phone}`;
        const whatsappUrl = `https://wa.me/905421985134?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
        onClose();
    };

    const handlePhoneCall = () => {
        window.location.href = 'tel:05421985134';
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-[101] p-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="relative w-full max-w-lg bg-[#0a0c10] border border-white/10 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all z-10"
                            >
                                <X size={18} className="text-gray-400" />
                            </button>

                            {/* Glow Effect */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-custom/10 blur-[100px] rounded-full pointer-events-none" />

                            {/* Content */}
                            <div className="relative p-8 md:p-12">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">
                                        Hızlı Fiyat Teklifi
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Bilgilerinizi paylaşın, size en uygun çözümü sunalım
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div>
                                        <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">
                                            Adınız Soyadınız
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:bg-white/10 focus:border-amber-custom/50 transition-all outline-none"
                                            placeholder="Örn: Ahmet Yılmaz"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">
                                            Telefon Numaranız
                                        </label>
                                        <input
                                            type="tel"
                                            required
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:bg-white/10 focus:border-amber-custom/50 transition-all outline-none"
                                            placeholder="05XX XXX XX XX"
                                        />
                                    </div>

                                    {/* Service Select */}
                                    <div>
                                        <label className="block text-xs font-black text-gray-500 uppercase tracking-wider mb-2">
                                            Hizmet Türü
                                        </label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:bg-white/10 focus:border-amber-custom/50 transition-all outline-none cursor-pointer"
                                        >
                                            {serviceOptions.map((option) => (
                                                <option key={option} value={option} className="bg-[#0a0c10]">
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Submit Buttons */}
                                    <div className="space-y-3 pt-4">
                                        <MagneticButton>
                                            <button
                                                type="submit"
                                                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-amber-custom text-black font-black text-sm tracking-widest rounded-xl hover:bg-amber-custom/90 transition-all shadow-[0_0_30px_rgba(255,179,0,0.3)] uppercase"
                                            >
                                                <Send size={18} />
                                                WhatsApp ile Gönder
                                            </button>
                                        </MagneticButton>

                                        <button
                                            type="button"
                                            onClick={handlePhoneCall}
                                            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-white/5 border border-white/10 text-white font-black text-sm tracking-widest rounded-xl hover:bg-white/10 transition-all uppercase"
                                        >
                                            <Phone size={18} />
                                            Veya Hemen Arayın
                                        </button>
                                    </div>
                                </form>

                                <p className="text-center text-xs text-gray-600 mt-6">
                                    Bilgileriniz gizli tutulur ve sadece fiyat teklifi için kullanılır
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuickPriceForm;
