import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-slate-900 text-white py-16 px-6 text-center relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/20" />
            </div>

            <div className="relative z-10 max-w-sm mx-auto">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-primary text-3xl mb-4 inline-block animate-pulse">
                        favorite
                    </span>
                </motion.div>

                <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="font-script text-4xl text-primary mb-3"
                >
                    Danang & Eva
                </motion.h3>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-serif italic text-slate-400 text-sm mb-8"
                >
                    29 Maret 2026
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="border-t border-slate-800 pt-8"
                >
                    <p className="text-xs text-slate-500 leading-relaxed">
                        Merupakan suatu kehormatan dan kebahagiaan bagi kami
                        <br />
                        apabila Bapak/Ibu/Saudara/i berkenan hadir.
                    </p>
                    <p className="text-xs text-slate-600 mt-6 font-display tracking-wider uppercase">
                        Terima kasih atas doa restu Anda
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
};
