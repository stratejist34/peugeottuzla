'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DiagnosticData {
    systemStatus: string;
    systemColor: "emerald" | "amber" | "red" | "blue";
    coreScanningTitle: string;
    coreStatus: string;
    items: { label: string; val: string }[];
}

interface DiagnosticWindowProps {
    isMobile?: boolean;
    className?: string;
    data?: DiagnosticData;
}

const defaultData: DiagnosticData = {
    systemStatus: "BOOT_OK",
    systemColor: "emerald",
    coreScanningTitle: "Core Scanning",
    coreStatus: "ACTIVE",
    items: [
        { label: "Engine_PID", val: "0x44" },
        { label: "Brake_PSI", val: "NORM" },
        { label: "ECU_Gateway", val: "SYNC" }
    ]
};

const DiagnosticWindow = ({ isMobile = false, className = '', data = defaultData }: DiagnosticWindowProps) => {
    return (
        <motion.div
            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: 20, rotateY: -20 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 0, rotateY: -15 }}
            whileHover={isMobile ? {} : { rotateY: -5, x: -5, scale: 1.05 }}
            transition={{
                duration: 1,
                ease: "easeOut",
                rotateY: { duration: 0.5 }
            }}
            style={{ perspective: "1000px" }}
            className={`
                bg-[#0a0c10]/80 backdrop-blur-2xl border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-30
                ${className || (isMobile ? 'relative w-full' : 'absolute top-0 -right-20 w-60 hidden xl:block')}
            `}
        >
            {/* Window Header */}
            <div className="flex items-center justify-between px-3 py-1.5 bg-white/5 border-b border-white/5">
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/30" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/30" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/30" />
                </div>
                <span className="text-[7px] font-black text-gray-600 tracking-[0.2em] uppercase">SYS.DGNSTC.v2</span>
            </div>

            {/* Window Content */}
            <div className="p-3 space-y-3 font-mono">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={data.systemStatus} // Trigger animation on data change
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 5 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5"
                    >
                        <div className="flex justify-between text-[8px]">
                            <span className="text-gray-500 uppercase">System Status</span>
                            <span className={`text-${data.systemColor}-400 font-black animate-pulse`}>{data.systemStatus}</span>
                        </div>
                        <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className={`h-full bg-gradient-to-r from-${data.systemColor}-500 to-amber-500`}
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="space-y-1.5">
                    <div className="flex justify-between text-[8px]">
                        <span className="text-gray-300 uppercase">{data.coreScanningTitle}</span>
                        <span className="text-amber-500 font-black">{data.coreStatus}</span>
                    </div>
                    <div className="space-y-1 border-l border-white/5 pl-2">
                        {data.items.map((item, i) => (
                            <div key={`${item.label}-${i}`} className="flex justify-between text-[7px] leading-none py-0.5">
                                <span className="text-gray-300 font-medium tracking-wide">{`${item.label}`}</span>
                                <span className="text-emerald-400 font-bold">{item.val}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pt-2 border-t border-white/5">
                    <div className="text-[6px] text-gray-500 font-bold">
                        LOC: TUZLA_TR / STB_01 <br />
                        SCAN_ID: 190.168.1.44
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default DiagnosticWindow;
