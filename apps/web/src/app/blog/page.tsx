import Link from "next/link";
import { getPosts } from "@/lib/api";

export const metadata = {
    title: "Blog - Dr. Selami Balcı",
    description: "Dr. Selami Balcı'nın blog yazıları.",
};

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-slate-900 border-b border-slate-200 pb-4">Blog Yazıları</h1>

            {posts.length === 0 ? (
                <p className="text-slate-500 py-8 text-center italic">Henüz yayınlanmış bir yazı bulunmuyor.</p>
            ) : (
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="flex flex-col space-y-3 bg-white p-6 rounded-lg shadow-sm border border-slate-100 transition hover:shadow-md">
                            <h2 className="text-2xl font-semibold text-slate-800">
                                <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition">
                                    {post.title}
                                </Link>
                            </h2>
                            <div className="text-sm text-slate-500">
                                {post.published_at && new Date(post.published_at).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </div>
                            <p className="text-slate-600 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div>
                                <Link href={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline text-sm">
                                    Devamını Oku →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
