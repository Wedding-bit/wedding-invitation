import React from 'react';
import { motion } from 'framer-motion';

export const GroomBride: React.FC = () => {
    return (
        <section className="px-8 py-16 bg-white dark:bg-slate-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 border-[1px] border-primary/10 rounded-full" />
            <div className="absolute top-10 right-10 -mr-20 -mt-20 w-64 h-64 border-[1px] border-primary/5 rounded-full" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <span className="font-serif italic text-slate-500 text-sm">Dengan Memohon Rahmat Allah SWT</span>
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto mt-4" />
            </motion.div>

            <div className="space-y-16">
                {/* Groom */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center group relative z-10"
                >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-full h-full bg-slate-200 bg-cover" style={{ backgroundImage: "url('/4x6danang.jpeg')", backgroundPosition: "top center" }} />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-navy-custom dark:text-white mb-2 group-hover:text-primary transition-colors">
                        Nariswara Danang Prasetya Aji
                    </h3>
                    <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-4">Putra Pertama dari</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-6">
                        Bapak Sutrisno Budiyanto<br />& Ibu Suwantini
                    </p>
                    <div className="mt-6 flex justify-center">
                        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent"></span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center italic font-script text-5xl text-primary/40 relative"
                >
                    <span className="relative z-10 bg-white dark:bg-slate-900 px-4">&</span>
                    <div className="absolute top-1/2 left-1/4 right-1/4 h-px bg-primary/20 -z-0 transform -translate-y-1/2" />
                </motion.div>

                {/* Bride */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center group relative z-10"
                >
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white shadow-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="w-full h-full bg-slate-200 bg-cover" style={{ backgroundImage: "url('/4x6eva.jpeg')", backgroundPosition: "top center" }} />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-navy-custom dark:text-white mb-2 group-hover:text-primary transition-colors">
                        Eva Kurnia Damayanti
                    </h3>
                    <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-4">Putri Pertama dari</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-6">
                        Bapak Walurat<br />& Ibu Sri Wahyuni
                    </p>
                    <div className="mt-6 flex justify-center">
                        <span className="inline-block h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent"></span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
