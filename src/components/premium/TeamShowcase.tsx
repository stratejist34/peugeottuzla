'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Cpu, HeadphonesIcon } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Image from 'next/image';
import { useContactIntent } from '@/components/analytics/ContactIntentProvider';

const teamMembers = [
    {
        name: "Ahmet Yılmaz",
        role: "Baş Teknisyen",
        expertise: "19 Yıllık Peugeot Uzmanlığı",
        icon: <Wrench size={24} />,
        description: "Motor mekanik ve şanzıman revizyonunda uzman. Her Peugeot modelini içinden dışından bilir.",
        image: "/images/master-man-image.webp"
    },
    {
        name: "Mehmet Kaya",
        role: "Elektronik Uzmanı",
        expertise: "Diagnostik & ECU Specialist",
        icon: <Cpu size={24} />,
        description: "En karmaşık elektronik arızaları bile dakikalar içinde tespit eder. Teknoloji ve deneyim bir arada.",
        image: "/images/about-us-page-inspection.webp"
    },
    {
        name: "Ayşe Demir",
        role: "Müşteri İlişkileri",
        expertise: "Güler Yüzlü Destek",
        icon: <HeadphonesIcon size={24} />,
        description: "Sizin için en iyi çözümü bulmak için çalışır. Tuzla'nın en samimi servis danışmanı.",
        image: "/images/about-us-page-mechanic.webp"
    }
];

const TeamShowcase = () => {
    const { openContactIntent } = useContactIntent();
    return (
        <section className="py-32 bg-gradient-to-b from-[#07090f] via-[#0c0e16] to-[#07090f] relative overflow-hidden">
            {/* Background Glows - Reduced blur for mobile optimization */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-custom/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 text-amber-custom mb-6"
                    >
                        <div className="w-12 h-px bg-amber-custom" />
                        <span className="text-sm font-medium tracking-wide">Ekibimiz</span>
                        <div className="w-12 h-px bg-amber-custom" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6"
                    >
                        Teknoloji ve <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                            İnsan Dokusu.
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Her biri alanında uzman, hepsi müşteri memnuniyeti odaklı.
                        <span className="block mt-2 text-white/60">Aracınız güvenilir ellerde.</span>
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                    {teamMembers.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            style={{ willChange: 'transform' }} // GPU Hint
                        >
                            {/* Conditional Magnetic Effect: Disable on Mobile for Performance */}
                            <div className="hidden md:block">
                                <MagneticButton>
                                    <TeamCard member={member} />
                                </MagneticButton>
                            </div>
                            <div className="block md:hidden">
                                <TeamCard member={member} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <p className="text-gray-500 text-sm mb-6 font-medium">
                        Ekibimizle tanışmak ve aracınız hakkında görüşmek ister misiniz?
                    </p>
                    <MagneticButton>
                        <a
                            href="tel:05421985134"
                            onClick={(event) => {
                                event.preventDefault();
                                openContactIntent({
                                    type: 'phone',
                                    href: 'tel:05421985134',
                                    source: 'team_showcase_cta'
                                });
                            }}
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-black text-sm tracking-widest rounded-2xl backdrop-blur-md hover:bg-amber-custom hover:text-black hover:border-amber-custom transition-all duration-300 uppercase"
                        >
                            Hemen Arayın
                            <span className="text-amber-custom group-hover:text-black">→</span>
                        </a>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
};

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="group relative h-[520px] bg-[#0a0c10] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-amber-custom/40 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
        {/* Actual Image Render */}
        <div className="absolute inset-0 z-0">
            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090f] via-[#07090f]/60 to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end p-8">
            {/* Icon Badge */}
            <div className="mb-6">
                <div className="w-16 h-16 bg-amber-custom rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,179,0,0.4)] text-black group-hover:scale-110 transition-transform duration-500">
                    {member.icon}
                </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-3xl font-black text-white mb-2 group-hover:text-amber-custom transition-colors">
                {member.name}
            </h3>
            <p className="text-sm font-black text-amber-custom uppercase tracking-widest mb-3">
                {member.role}
            </p>

            {/* Expertise Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg mb-4 w-fit">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    {member.expertise}
                </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {member.description}
            </p>
        </div>

        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 h-1 w-0 bg-amber-custom group-hover:w-full transition-all duration-700" />
    </div>
);

export default TeamShowcase;
