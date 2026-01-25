import { notFound } from "next/navigation";
import { getPost } from "@/lib/api";
import { Metadata } from "next";

export const runtime = "edge";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Yazı Bulunamadı' };
    return {
        title: `${post.title} - Dr. Selami Balcı`,
        description: post.excerpt || post.title,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto space-y-6">
            <header className="space-y-4 border-b border-slate-200 pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                    {post.title}
                </h1>
                <div className="text-slate-500 text-sm">
                    {post.published_at && new Date(post.published_at).toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </header>

            {/* Basic HTML/Markdown Rendering */}
            <div
                className="prose prose-slate max-w-none prose-a:text-blue-600 prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
        </article>
    );
}
