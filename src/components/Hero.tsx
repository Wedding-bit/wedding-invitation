import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });
    const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);

    return (
        <div ref={sectionRef} className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 px-6">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ opacity: textOpacity }}
                className="w-full max-w-md mx-auto relative"
            >
                <div className="text-center mb-8">
                    <span className="font-serif italic tracking-[0.3em] text-sm uppercase text-slate-500 dark:text-slate-400">The Wedding Of</span>

                    <div className="relative mt-8 mb-8 flex items-center justify-center gap-4">
                        <div className="hidden xs:block h-px w-12 bg-primary/30"></div>
                        <h1 className="font-script text-6xl md:text-7xl text-primary drop-shadow-sm">Danang & Eva</h1>
                        <div className="hidden xs:block h-px w-12 bg-primary/30"></div>
                    </div>

                    <div className="flex justify-center gap-2 opacity-60">
                        <span className="material-symbols-outlined text-primary">local_florist</span>
                        <span className="material-symbols-outlined text-primary">local_florist</span>
                        <span className="material-symbols-outlined text-primary">local_florist</span>
                    </div>
                </div>

                <div className="px-8 py-4 relative z-10">
                    <div className="relative p-2 rounded-t-full border-2 border-primary/20 bg-pastel-blue/30 overflow-hidden shadow-2xl">
                        <motion.div
                            className="aspect-[4/5] rounded-t-full bg-cover bg-center overflow-hidden grayscale-[10%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            style={{
                                backgroundImage: "url('/master-photo.jpg')",
                                y: photoY,
                            }}
                        />

                        {/* Decorative Gold Corner */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 right-0 p-4"
                        >
                            <span className="material-symbols-outlined text-gold-accent text-4xl opacity-50 drop-shadow-md">flare</span>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-center mt-10 px-4"
                >
                    <p className="font-serif italic text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto text-sm">
                        Tuhan membuat segala sesuatu indah pada waktunya. Indah saat Dia mempertemukan, indah saat Dia menumbuhkan kasih tulus dari hari ke hari...
                    </p>
                </motion.div>
            </motion.div>

            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-pastel-blue/20 rounded-full blur-3xl dark:bg-primary/10" />
        </div>
    );
};
