import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RSVP: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        attendance: 'hadir',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setFormData({ name: '', attendance: 'hadir', message: '' });
        }, 800);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <section className="px-6 py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto"
            >
                <div className="text-center mb-10">
                    <span className="material-symbols-outlined text-primary text-4xl mb-2">mark_email_read</span>
                    <h2 className="font-script text-5xl text-primary mt-2">RSVP & Ucapan</h2>
                    <p className="font-serif italic text-sm mt-4 text-slate-500 dark:text-slate-400">
                        Tinggalkan pesan, doa, dan konfirmasi kehadiran Anda
                    </p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 p-6 rounded-2xl text-center shadow-lg"
                    >
                        <span className="material-symbols-outlined text-5xl mb-4 opacity-80">check_circle</span>
                        <h3 className="font-serif font-bold text-xl mb-2">Terima Kasih!</h3>
                        <p className="text-sm">Pesan dan konfirmasi kehadiran Anda telah tersimpan.</p>
                        <button
                            onClick={() => setIsSubmitted(false)}
                            className="mt-6 text-xs font-bold uppercase tracking-wider text-green-700 dark:text-green-400 hover:text-green-900 underline underline-offset-4 transition-colors"
                        >
                            Kirim Pesan Lain
                        </button>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">

                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nama Lengkap Anda"
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="attendance" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Kehadiran</label>
                            <div className="relative">
                                <select
                                    id="attendance"
                                    name="attendance"
                                    value={formData.attendance}
                                    onChange={handleChange}
                                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all appearance-none cursor-pointer pr-10"
                                >
                                    <option value="hadir">Ya, Saya akan hadir</option>
                                    <option value="tidak_hadir">Maaf, Saya tidak bisa hadir</option>
                                    <option value="ragu">Masih ragu-ragu</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-slate-500">
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Ucapan & Doa</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tuliskan ucapan dan doa untuk kedua mempelai..."
                                className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-slate-400 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full group relative inline-flex items-center justify-center gap-2 bg-primary/90 hover:bg-primary text-white px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] mt-2"
                        >
                            <span className="material-symbols-outlined text-lg group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">send</span>
                            <span>Kirim Konfirmasi</span>
                        </button>
                    </form>
                )}
            </motion.div>
        </section>
    );
};
