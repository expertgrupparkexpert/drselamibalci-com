"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Ana Sayfa" },
        { href: "/hakkinda", label: "Hakkında" },
        { href: "/yayinlar-ve-basin", label: "Yayınlar ve Basın" },
        { href: "/uzmanlik-alanlari", label: "Uzmanlık Alanları" },
        { href: "/yurtdisi-faaliyetler", label: "Yurtdışı Faaliyetler" },
        { href: "/iletisim", label: "İletişim" },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen
                    ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200/50 py-3"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-4 z-50" onClick={() => setMobileMenuOpen(false)}>
                        <div className={`relative w-12 h-12 rounded-full overflow-hidden border-2 transition duration-300 ${scrolled || mobileMenuOpen ? 'border-accent-700' : 'border-white/50'}`}>
                            <Image
                                src="/dr-selami-balci.jpg"
                                alt="Dr. Selami Balcı"
                                fill
                                className="object-cover"
                                sizes="48px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-[0.55rem] font-bold tracking-[0.15em] uppercase mb-0.5 transition duration-300 ${scrolled || mobileMenuOpen ? 'text-slate-500' : 'text-slate-600'} whitespace-nowrap`}>
                                AKADEMİSYEN • YÖNETİCİ • ŞEHİRCİLİK
                            </span>
                            <span className={`text-xl font-bold font-serif leading-none transition duration-300 ${scrolled || mobileMenuOpen ? 'text-slate-900 message-blue' : 'text-slate-900'} whitespace-nowrap`}>
                                Dr. Selami Balcı
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:block">
                        <ul className="flex items-center space-x-1 bg-white/50 backdrop-blur-sm px-2 py-1.5 rounded-full border border-slate-100/50 shadow-sm">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative whitespace-nowrap ${isActive
                                                ? "text-white bg-accent-700 shadow-md transform scale-105"
                                                : "text-slate-600 hover:text-accent-700 hover:bg-accent-50"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    {/* Right CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/iletisim"
                            className={`hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 ${scrolled
                                ? "bg-slate-900 text-white hover:bg-slate-800"
                                : "bg-white text-slate-900 border border-slate-200 hover:border-slate-300"
                                }`}
                        >
                            <span>Randevu Al</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="xl:hidden text-slate-900 p-2 z-50 focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-6 xl:hidden animate-in slide-in-from-top-5 fade-in duration-200 flex flex-col h-screen">
                    <nav className="flex flex-col space-y-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 flex justify-between items-center group"
                            >
                                <span>{link.label}</span>
                                <span className="text-slate-300 group-hover:text-accent-600 transition-colors">→</span>
                            </Link>
                        ))}
                        <Link
                            href="/iletisim"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-slate-900 text-white p-4 rounded-xl text-center font-bold text-lg mt-4 shadow-lg active:scale-95 transition-transform"
                        >
                            Randevu Al
                        </Link>
                    </nav>
                </div>
            )}
        </>
    );
}
