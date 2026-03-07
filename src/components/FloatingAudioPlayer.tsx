import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingAudioPlayerProps {
    isOpen: boolean;
}

export const FloatingAudioPlayer: React.FC<FloatingAudioPlayerProps> = ({ isOpen }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (isOpen && audioRef.current) {
            audioRef.current.play()
                .then(() => setIsPlaying(true))
                .catch((error) => console.log("Audio autoplay prevented by browser", error));
        }
    }, [isOpen]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play()
                    .catch((error) => console.log("Audio play failed", error));
            }
            setIsPlaying(!isPlaying);
        }
    };

    if (!isOpen) return null;

    return (
        <>
            <audio
                ref={audioRef}
                loop
                // User's requested song: Bite My Lower Lips - eSNa
                src="/master-audio.mp3"
            />
            <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                onClick={togglePlay}
                className="fixed bottom-24 right-6 md:right-10 z-40 w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-primary/20 hover:scale-110 active:scale-95 transition-all text-primary"
                aria-label={isPlaying ? "Pause music" : "Play music"}
            >
                <span className={`material-symbols-outlined text-xl ${isPlaying ? 'animate-spin-slow' : ''}`}>
                    {isPlaying ? 'music_note' : 'music_off'}
                </span>
            </motion.button>
        </>
    );
};
