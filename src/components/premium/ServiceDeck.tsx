'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Wrench, Settings, ShieldCheck, Clock, Snowflake, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import DiagnosticWindow, { DiagnosticData } from './DiagnosticWindow';

// --- DATA DEFINITION ---
interface ServiceItem {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    diagnosticData: DiagnosticData;
}

const services: ServiceItem[] = [
    {
        id: 'ariza-tespit',
        title: 'Arıza Tespit',
        description: 'Bilgisayarlı nokta atışı teşhis hizmeti.',
        icon: <MousePointer2 size={24} />,
        image: '/images/Ariza-Tespiti.jpg',
        diagnosticData: {
            systemStatus: "DIAG_MODE",
            systemColor: "emerald",
            coreScanningTitle: "OBD-II Interface",
            coreStatus: "CONNECTED",
            items: [
                { label: "DTC_READ", val: "ACTIVE" },
                { label: "ECU_CONN", val: "OK" },
                { label: "CAN_BUS", val: "SYNC" }
            ]
        }
    },
    {
        id: 'motor-mekanik',
        title: 'Motor Mekanik',
        description: 'Motor yenileme ve mekanik revizyon.',
        icon: <Wrench size={24} />,
        image: '/images/Motor-Tamiri.jpg',
        diagnosticData: {
            systemStatus: "ENGINE_OK",
            systemColor: "amber",
            coreScanningTitle: "Engine Block",
            coreStatus: "RPM_IDLE",
            items: [
                { label: "COMPRESSION", val: "175psi" },
                { label: "TIMING", val: "SYNC" },
                { label: "OIL_PRESS", val: "45psi" }
            ]
        }
    },
    {
        id: 'sanziman',
        title: 'Şanzıman',
        description: 'EAT8 & AL4 şanzıman uzmanlığı.',
        icon: <Settings size={24} />,
        image: '/images/Peugeot-Sanziman-AL4-EAT8-Tamir-Bakim.jpg',
        diagnosticData: {
            systemStatus: "TRANS_OPT",
            systemColor: "emerald",
            coreScanningTitle: "Transmission",
            coreStatus: "GEAR_N",
            items: [
                { label: "FLUID_TEMP", val: "88°C" },
                { label: "PRESSURE", val: "12bar" },
                { label: "CLUTCH", val: "OK" }
            ]
        }
    },
    {
        id: 'fren',
        title: 'Fren Sistemi',
        description: 'Disk, balata ve hidrolik kontrolü.',
        icon: <ShieldCheck size={24} />,
        image: '/images/fren-diski.webp',
        diagnosticData: {
            systemStatus: "ABS_ACTIVE",
            systemColor: "red",
            coreScanningTitle: "Brake Sys",
            coreStatus: "HYDRAULIC",
            items: [
                { label: "PAD_WEAR", val: "15%" },
                { label: "DISC_TEMP", val: "45°C" },
                { label: "FLUID_LVL", val: "MAX" }
            ]
        }
    },
    {
        id: 'bakim',
        title: 'Periyodik Bakım',
        description: 'Orijinal filtre ve yağ değişimi.',
        icon: <Clock size={24} />,
        image: '/images/Yag-ve-Filtre.jpg',
        diagnosticData: {
            systemStatus: "MAINT_REQ",
            systemColor: "emerald",
            coreScanningTitle: "Filter Check",
            coreStatus: "CLEAN",
            items: [
                { label: "OIL_LIFE", val: "100%" },
                { label: "AIR_FLOW", val: "NORM" },
                { label: "POLLEN", val: "NEW" }
            ]
        }
    },
    {
        id: 'klima',
        title: 'Klima Servisi',
        description: 'Gaz dolumu ve kaçak testi.',
        icon: <Snowflake size={24} />,
        image: '/images/Klima-Gazi-Dolumu.jpg',
        diagnosticData: {
            systemStatus: "HVAC_ON",
            systemColor: "blue",
            coreScanningTitle: "Climate Ctrl",
            coreStatus: "COOLING",
            items: [
                { label: "GAS_PRESS", val: "500psi" },
                { label: "TEMP_OUT", val: "4°C" },
                { label: "COMPRESS", val: "ON" }
            ]
        }
    },
    {
        id: 'yol-yardim',
        title: 'Yol Yardım',
        description: '7/24 Acil çekici ve destek.',
        icon: <Car size={24} />,
        image: '/images/yol-yardim.jpg',
        diagnosticData: {
            systemStatus: "SOS_SIGNAL",
            systemColor: "amber",
            coreScanningTitle: "GPS Location",
            coreStatus: "TRACKING",
            items: [
                { label: "LATITUDE", val: "40.8N" },
                { label: "LONGITUDE", val: "29.3E" },
                { label: "ETA", val: "15MIN" }
            ]
        }
    },
    {
        id: 'yedek-parca',
        title: 'Yedek Parça',
        description: 'Garantili orijinal yedek parça.',
        icon: <CheckCircle2 size={24} />,
        image: '/images/cikma-parcalar.jpg',
        diagnosticData: {
            systemStatus: "STOCK_CHK",
            systemColor: "emerald",
            coreScanningTitle: "Inventory",
            coreStatus: "AVAIL",
            items: [
                { label: "OEM_PART", val: "YES" },
                { label: "WARRANTY", val: "2YR" },
                { label: "STOCK", val: "HIGH" }
            ]
        }
    }
];

const ServiceDeck = () => {
    const [activeService, setActiveService] = useState<ServiceItem>(services[0]);

    return (
        <div className="flex flex-col lg:flex-row gap-8 min-h-[600px] relative">
            {/* LEFT COLUMN: COMMAND LIST */}
            <div className="flex-1 space-y-3 relative z-20">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onClick={() => {
                            setActiveService(service);
                        }}
                        style={{ willChange: 'transform' }} // GPU Acceleration hint
                        className={`
                            group relative overflow-hidden rounded-xl border p-4 cursor-pointer transition-all duration-300
                            ${activeService.id === service.id
                                ? 'bg-amber-custom/10 border-amber-custom/50 shadow-[0_0_30px_rgba(255,179,0,0.1)]'
                                : 'bg-[#0a0c10]/60 border-white/5 hover:border-white/20 hover:bg-white/5'
                            }
                        `}
                    >
                        {/* Active Indicator Line */}
                        {activeService.id === service.id && (
                            <motion.div
                                layoutId="activeServiceLine"
                                style={{ willChange: 'transform' }}
                                className="absolute left-0 top-0 bottom-0 w-1 bg-amber-custom box-shadow-[0_0_10px_#ffb300]"
                            />
                        )}

                        <div className="flex items-center gap-4">
                            <div className={`
                                w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300
                                ${activeService.id === service.id ? 'bg-amber-custom text-black' : 'bg-white/5 text-gray-400 group-hover:text-white'}
                            `}>
                                {service.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className={`font-bold text-lg mb-0.5 ${activeService.id === service.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                    {service.title}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-1">{service.description}</p>
                            </div>
                            <ArrowRight
                                size={16}
                                className={`transform transition-all duration-300 ${activeService.id === service.id ? 'translate-x-0 opacity-100 text-amber-custom' : '-translate-x-4 opacity-0'}`}
                            />
                        </div>

                        {/* Mobile HUD Injection for Active Item */}
                        <div className="lg:hidden">
                            <AnimatePresence>
                                {activeService.id === service.id && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                        animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <DiagnosticWindow isMobile={true} data={service.diagnosticData} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* RIGHT COLUMN: PREVIEW DECK (Desktop Only) */}
            <div className="hidden lg:flex flex-1 relative h-[750px] rounded-3xl overflow-hidden border border-white/10 bg-[#0a0c10] sticky top-24 shadow-2xl">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-0"
                    >
                        {/* Brighter Image */}
                        <Image
                            src={activeService.image}
                            alt={activeService.title}
                            fill
                            className="object-cover opacity-60"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Lighter Gradients */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10]/80 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Grid Overlay */}
                <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-10" />

                {/* HUD Positioned in the Deck - More Distant/Visible */}
                <div className="absolute top-8 right-8 z-30 transform scale-[1.35] origin-top-right drop-shadow-2xl">
                    <DiagnosticWindow
                        data={activeService.diagnosticData}
                        className="w-64 !bg-black !border-white/30 !shadow-[0_10px_40px_rgba(0,0,0,1)] ring-1 ring-white/10"
                    />
                </div>

                {/* Service Details in Deck */}
                <div className="absolute bottom-10 left-10 z-20 max-w-md">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 text-amber-custom font-mono text-xs mb-4">
                            <span className="animate-pulse">●</span>
                            <span>{activeService.diagnosticData.systemStatus}</span>
                        </div>
                        <h2 className="text-4xl font-display uppercase text-white mb-4 leading-none">
                            {activeService.title}
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-amber-custom pl-4">
                            {activeService.description}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDeck;
