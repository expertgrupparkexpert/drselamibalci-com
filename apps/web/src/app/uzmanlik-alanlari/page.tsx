import { getPageContent, getResumeItems } from "@/lib/api";
import { notFound } from "next/navigation";
import { ResumeItem } from "@repo/shared";

export const runtime = 'edge';

export const metadata = {
    title: "Uzmanlık Alanları - Dr. Selami Balcı",
    description: "Dr. Selami Balcı'nın uzmanlık alanları ve yönettiği projeler.",
};

export default async function ExpertisePage() {
    const page = await getPageContent('expertise');
    const resumeItems = await getResumeItems();

    if (!page) {
        // Fallback title if DB page is missing logic
        // notFound(); 
    }

    const projects = resumeItems.filter(i => i.type === 'project');

    return (
        <div className="bg-slate-50 min-h-screen pb-20">
            {/* Hero Section */}
            <div className="bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 py-20 text-center space-y-6">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold tracking-wide uppercase">
                        Portfolio
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 font-serif tracking-tight leading-tight">
                        {page?.title || 'Uzmanlık Alanları'}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                        Sürdürülebilir kentsel çözümler, büyük ölçekli altyapı projeleri ve stratejik yönetim danışmanlığı.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16 space-y-16">
                {/* Static Content */}
                {page?.content && (
                    <div className="prose prose-slate max-w-4xl mx-auto prose-lg p-10 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div dangerouslySetInnerHTML={{ __html: page.content }} />
                    </div>
                )}

                {/* Managed Projects List */}
                <section className="space-y-10">
                    <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
                        <h2 className="text-3xl font-bold text-slate-800 font-serif">Yönetilen Başlıca Projeler</h2>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
                            {projects.length} Proje
                        </span>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                        {projects.map((project) => (
                            <div key={project.id} className="group relative bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Accent Bar */}
                                <div className="absolute top-0 left-8 right-8 h-1.5 bg-gradient-to-r from-accent-600 to-blue-600 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-600 uppercase tracking-wider">
                                            {project.organization}
                                        </div>
                                        {(project.start_date || project.end_date) && (
                                            <span className="text-sm font-medium text-slate-400 font-mono">
                                                {(() => {
                                                    const start = parseInt(project.start_date);
                                                    const end = parseInt(project.end_date || '');

                                                    // If we have valid years for start and end
                                                    if (!isNaN(start) && !isNaN(end) && project.start_date.length === 4 && project.end_date?.length === 4) {
                                                        const diff = end - start;
                                                        return diff > 0 ? `${diff} Yıl Süren Bir Çalışma` : `${start} Yılında Yapılan Çalışma`;
                                                    }

                                                    // Legacy/Mixed format handling
                                                    if (project.end_date) {
                                                        return `${project.start_date} - ${project.end_date}`;
                                                    }

                                                    return project.start_date;
                                                })()}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-accent-700 transition-colors font-serif leading-snug">
                                        {project.title}
                                    </h3>

                                    {project.description && (
                                        <p className="text-slate-600 leading-relaxed">
                                            {project.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {projects.length === 0 && (
                            <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-slate-300">
                                <p className="text-slate-500 text-lg">Henüz listelenen proje bulunmuyor.</p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
}
