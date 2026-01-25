import { getResumeItems } from "@/lib/api";
import { notFound } from "next/navigation";
import { ResumeItem } from "@repo/shared";

export const metadata = {
    title: "Hakkında - Dr. Selami Balcı",
    description: "Dr. Selami Balcı biyografisi, kariyer geçmişi ve eğitim bilgileri.",
};

export default async function AboutPage() {
    // const page = await getPageContent('about'); // Removed dynamic fetch
    const resumeItems = await getResumeItems();

    // if (!page) notFound(); // Removed check

    const education = resumeItems.filter(i => i.type === 'education');
    const experience = resumeItems.filter(i => i.type === 'experience');
    const awards = resumeItems.filter(i => i.type === 'award');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Header Section */}
            <div className="bg-white border-b border-slate-100 pt-16 pb-12 mb-12">
                <div className="container max-w-5xl mx-auto px-6 text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight">Hakkında</h1>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto">
                        Dr. Selami Balcı: <span className="text-accent-700 font-medium">Şehircilik ve Otopark</span>
                    </p>
                </div>
            </div>

            <div className="container max-w-6xl mx-auto px-6 space-y-20">
                {/* Main Content Grid */}
                <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* Left: Photo Card */}
                    <div className="md:col-span-5 lg:col-span-4 sticky top-24">
                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-slate-100 rotate-1 transition hover:rotate-0 duration-500">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative">
                                <img
                                    src="/dr-selami-balci.jpg"
                                    alt="Dr. Selami Balcı"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="pt-6 pb-2 text-center">
                                <h3 className="font-serif font-bold text-2xl text-slate-900">Dr. Selami Balcı</h3>
                                <p className="text-accent-700 font-medium">Harita Yüksek Mühendisi</p>
                            </div>
                        </div>

                    </div>

                    {/* Right: Bio & Key Info */}
                    <div className="md:col-span-7 lg:col-span-8 space-y-12">
                        {/* Bio Card */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                            <h2 className="text-3xl font-serif font-bold text-slate-900">Profesyonel Biyografi</h2>
                            <div className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed">
                                <p className="mb-4">
                                    Dr. Selami Balcı, şehircilik, gayrimenkul geliştirme, değerleme ve sürdürülebilir mobilite alanlarında uzman bir iş insanıdır. Yıldız Teknik Üniversitesi Harita Mühendisliği mezunu olan Dr. Balcı, Yeditepe Üniversitesi'nde MBA (Pazarlama, Finans Yönetimi, Muhasebe) ve Okan Üniversitesi'nde Arazi Yönetimi alanında doktora yapmıştır. Ayrıca Sermaye Piyasası Kurulu tarafından verilen Gayrimenkul Değerleme Uzmanlığı sertifikasına sahiptir.
                                </p>
                                <p>
                                    2018 yılında kurduğu Expert Grup, şehirlerin geleceğini şekillendirecek markaları tek çatı altında toplamıştır: Expert İmar, Goods Real Estate, Solar Expert, Park Expert ve Formula Bilişim. Bu markalar aracılığıyla gayrimenkul, enerji, şehircilik ve dijital dönüşüm alanlarında Türkiye'de ve yurt dışında çok sayıda proje geliştirmektedir.
                                </p>
                            </div>
                        </div>

                        {/* Uzmanlık Alanları Section from Screenshot */}
                        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 border-l-4 border-slate-900 pl-4">Uzmanlık Alanları</h2>
                            <ul className="space-y-4 text-slate-600 leading-relaxed list-disc pl-5">
                                <li>
                                    <strong className="text-slate-900">Sürdürülebilir Mobilite ve Otopark Yönetimi:</strong> Şehir genelinde otopark master planları, akıllı otopark sistemleri ve ulaşım verimliliği odaklı çözümler geliştirir.
                                </li>
                                {/* Add more bullets if user provides more, for now this matches the screenshot */}
                            </ul>
                        </div>

                        {/* Highlights Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Yıl Deneyim", val: "20+" },
                                { label: "Eğitim Düzeyi", val: "Doktora" },
                                { label: "Proje", val: "50+" },
                                { label: "Lokasyon", val: "Global" }
                            ].map((s, i) => (
                                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-center">
                                    <div className="text-accent-700 font-bold text-2xl font-serif">{s.val}</div>
                                    <div className="text-slate-400 text-xs font-bold uppercase tracking-wide mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Experience Section */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 border-l-4 border-accent-600 pl-4">Deneyim & Kariyer</h2>
                            <div className="space-y-4">
                                {experience.map((item) => (
                                    <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition group">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                            <h3 className="font-bold text-lg text-slate-900 group-hover:text-accent-700 transition">{item.title}</h3>
                                            <span className="text-sm font-medium text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{item.start_date} - {item.end_date || 'Devam Ediyor'}</span>
                                        </div>
                                        <div className="text-accent-700 font-medium mb-3">{item.organization}</div>
                                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Education Section */}
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold text-slate-900 border-l-4 border-slate-900 pl-4">Akademik Geçmiş</h2>
                            <div className="space-y-4">
                                {education.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-start p-4 hover:bg-white rounded-xl transition">
                                        <div className="w-12 h-12 flex-shrink-0 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center text-xl">🎓</div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                                            <div className="text-slate-500">{item.organization}</div>
                                            <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{item.start_date} - {item.end_date}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
