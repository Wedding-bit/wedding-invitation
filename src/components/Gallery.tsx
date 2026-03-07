import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    { src: '/master-photo.jpg', alt: 'Our precious moment' },
    { src: '/master-photo.jpg', alt: 'Our precious moment' },
    { src: '/master-photo.jpg', alt: 'Our precious moment' },
    { src: '/master-photo.jpg', alt: 'Our precious moment' }
];

export const Gallery: React.FC = () => {
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

            <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`overflow-hidden rounded-xl shadow-md cursor-pointer relative group ${index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                            }`}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${photo.src})` }}
                            aria-label={photo.alt}
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
