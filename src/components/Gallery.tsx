import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    { src: '/master-photo.jpg', alt: 'Our precious moment', span: 'col-span-2 row-span-2' },
    { src: '/master-photo.jpg', alt: 'Our precious moment', span: '' },
    { src: '/master-photo.jpg', alt: 'Our precious moment', span: '' },
    { src: '/master-photo.jpg', alt: 'Our precious moment', span: 'col-span-2' },
];

export const Gallery: React.FC = () => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <section className="px-4 py-16 bg-slate-50 dark:bg-slate-800">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-10"
            >
                <span className="material-symbols-outlined text-primary text-3xl mb-2">auto_awesome</span>
                <h2 className="font-script text-5xl text-primary">Momen Bahagia</h2>
                <p className="font-serif italic text-sm mt-4 text-slate-500">Kisah cinta yang terabadikan</p>
            </motion.div>

            {/* Masonry Grid */}
            <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto auto-rows-[120px] md:auto-rows-[160px]">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`overflow-hidden rounded-xl shadow-md cursor-pointer relative group ${photo.span}`}
                        onClick={() => setLightboxIndex(index)}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${photo.src})` }}
                            aria-label={photo.alt}
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 pointer-events-none">
                            <span className="material-symbols-outlined text-white text-lg drop-shadow-lg">zoom_in</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            src={photos[lightboxIndex].src}
                            alt={photos[lightboxIndex].alt}
                            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain"
                        />
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
