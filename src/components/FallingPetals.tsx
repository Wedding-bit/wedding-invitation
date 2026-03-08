import React from 'react';
import { motion } from 'framer-motion';

const petals = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 8 + Math.random() * 14,
    opacity: 0.15 + Math.random() * 0.35,
    sway: (Math.random() - 0.5) * 100,
}));

export const FallingPetals: React.FC = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{
                        x: 0,
                        y: -30,
                        rotate: 0,
                        opacity: 0,
                    }}
                    animate={{
                        x: [0, petal.sway, -petal.sway / 2, petal.sway / 3],
                        y: ['0vh', '105vh'],
                        rotate: [0, 180, 360],
                        opacity: [0, petal.opacity, petal.opacity, 0],
                    }}
                    transition={{
                        duration: petal.duration,
                        delay: petal.delay,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-0"
                    style={{ left: petal.left }}
                >
                    <span
                        className="material-symbols-outlined text-pink-300/60"
                        style={{ fontSize: `${petal.size}px` }}
                    >
                        spa
                    </span>
                </motion.div>
            ))}
        </div>
    );
};
