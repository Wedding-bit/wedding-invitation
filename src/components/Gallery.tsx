import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    {
        src: '/photo-1.webp',
        alt: 'Momen kebersamaan kami',
        span: 'col-span-2 row-span-2',
        position: 'center top',
        filter: 'none',
    },
    {
        src: '/photo-2.webp',
        alt: 'Senyum bahagia',
        span: '',
        position: 'right center',
        filter: 'sepia(20%) saturate(1.2)',
    },
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

            {/* Simple Grid Array for 2 Photos */}
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`overflow-hidden rounded-xl shadow-md cursor-pointer relative group aspect-[4/5]`}
                        onClick={() => setLightboxIndex(index)}
                    >
                        <div
                            className="w-full h-full bg-cover transition-transform duration-700 group-hover:scale-110"
                            style={{
                                backgroundImage: `url(${photo.src})`,
                                backgroundPosition: photo.position,
                                filter: photo.filter,
                            }}
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
                            style={{
                                objectPosition: photos[lightboxIndex].position,
                                filter: photos[lightboxIndex].filter,
                            }}
                        />

                        {/* Navigation arrows */}
                        {lightboxIndex > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        )}
                        {lightboxIndex < photos.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                            >
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        )}

                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {/* Photo counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-white text-xs font-bold tracking-wider">
                            {lightboxIndex + 1} / {photos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
