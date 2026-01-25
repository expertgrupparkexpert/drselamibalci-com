"use client";

import { EnvelopeIcon } from '@heroicons/react/24/outline';

const CONTACT_INFO = {
    email: 'drselamibalci@gmail.com',
};

export default function ContactClient() {
    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-100 pt-16 pb-12 mb-12">
                <div className="container max-w-4xl mx-auto px-6 text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 tracking-tight">İletişim</h1>
                    <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto">
                        Projeler, danışmanlık talepleri veya akademik işbirlikleri için benimle iletişime geçebilirsiniz.
                    </p>
                </div>
            </div>

            {/* İletişim Bilgileri - Ortalanmış */}
            <div className="max-w-2xl mx-auto w-full">
                {/* E-posta */}
                <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-slate-100 transition hover:shadow-md flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                    <div className="w-20 h-20 bg-accent-50 rounded-3xl flex items-center justify-center text-accent-700 shrink-0">
                        <EnvelopeIcon className="w-10 h-10" />
                    </div>
                    <div className="flex-1 space-y-2">
                        <h3 className="font-bold text-slate-900 text-2xl font-serif">E-posta Adresi</h3>
                        <p className="text-slate-500 font-light mb-4">
                            Projeleriniz ve sorularınız için bana doğrudan ulaşabilirsiniz.
                        </p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl md:text-2xl text-accent-700 font-bold hover:underline break-all">
                            {CONTACT_INFO.email}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
