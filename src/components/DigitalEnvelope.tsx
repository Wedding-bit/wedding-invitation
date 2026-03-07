import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const DigitalEnvelope: React.FC = () => {
    const [copiedBank, setCopiedBank] = useState<string | null>(null);

    const handleCopy = (text: string, bank: string) => {
        navigator.clipboard.writeText(text);
        setCopiedBank(bank);
        setTimeout(() => setCopiedBank(null), 2000);
    };

    return (
        <section className="px-6 py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-sm mx-auto p-8 rounded-3xl bg-pastel-blue/20 dark:bg-slate-800 border border-primary/20 shadow-xl"
            >
                <span className="material-symbols-outlined text-primary text-4xl mb-4">volunteer_activism</span>
                <h2 className="font-script text-4xl text-primary mb-4">Wedding Gift</h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 font-serif italic">
                    Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
                </p>

                <div className="space-y-4">
                    {/* Bank BCA */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none transform translate-x-2 -translate-y-2">
                            <span className="material-symbols-outlined text-8xl">account_balance</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1">BCA</h4>
                            <p className="text-2xl font-mono text-primary tracking-widest mb-1">1234567890</p>
                            <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-4">a.n Danang Prasetya</p>

                            <button
                                onClick={() => handleCopy('1234567890', 'BCA')}
                                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-xs font-bold transition-colors w-full justify-center"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {copiedBank === 'BCA' ? 'check_circle' : 'content_copy'}
                                </span>
                                {copiedBank === 'BCA' ? 'Berhasil Disalin!' : 'Salin No. Rekening'}
                            </button>
                        </div>
                    </div>

                    {/* E-Wallet / Dana */}
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-5 pointer-events-none transform translate-x-2 -translate-y-2">
                            <span className="material-symbols-outlined text-8xl">account_balance_wallet</span>
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h4 className="font-bold text-lg text-slate-800 dark:text-slate-200 mb-1">DANA / OVO</h4>
                            <p className="text-2xl font-mono text-primary tracking-widest mb-1">08123456789</p>
                            <p className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-4">a.n Eva Kurnia</p>

                            <button
                                onClick={() => handleCopy('08123456789', 'DANA')}
                                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-6 py-2 rounded-full text-xs font-bold transition-colors w-full justify-center"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {copiedBank === 'DANA' ? 'check_circle' : 'content_copy'}
                                </span>
                                {copiedBank === 'DANA' ? 'Berhasil Disalin!' : 'Salin No. E-Wallet'}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
