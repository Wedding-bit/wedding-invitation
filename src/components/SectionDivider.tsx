import React from 'react';

interface SectionDividerProps {
    variant?: 'floral' | 'wave' | 'gold-line';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ variant = 'floral' }) => {
    if (variant === 'wave') {
        return (
            <div className="relative w-full overflow-hidden">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-8 md:h-12 text-white dark:text-slate-900"
                >
                    <path
                        d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
                        fill="currentColor"
                    />
                </svg>
            </div>
        );
    }

    if (variant === 'gold-line') {
        return (
            <div className="flex items-center justify-center gap-3 py-8 px-6">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold-accent/40" />
                <span className="material-symbols-outlined text-gold-accent/40 text-lg">diamond</span>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold-accent/40" />
            </div>
        );
    }

    // Default: floral
    return (
        <div className="flex items-center justify-center gap-3 py-6 px-6">
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-transparent to-primary/20" />
            <span className="material-symbols-outlined text-primary/30 text-xl animate-pulse">local_florist</span>
            <div className="h-px w-6 bg-primary/20" />
            <span className="material-symbols-outlined text-primary/20 text-sm">favorite</span>
            <div className="h-px w-6 bg-primary/20" />
            <span className="material-symbols-outlined text-primary/30 text-xl animate-pulse">local_florist</span>
            <div className="h-px flex-1 max-w-[60px] bg-gradient-to-l from-transparent to-primary/20" />
        </div>
    );
};
