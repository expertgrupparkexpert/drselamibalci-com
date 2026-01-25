export interface Post {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string | null;
    cover_url: string | null;
    tags_json: string | null;
    published: number;
    published_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface ContactMessage {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    message: string;
    ip: string | null;
    user_agent: string | null;
    status: 'new' | 'seen' | 'archived';
    created_at: string;
}

export interface Video {
    id: number;
    title: string;
    url: string;
    thumbnail_url: string | null;
    category: 'tv' | 'short' | 'general';
    published: number;
    created_at: string;
}

export interface Activity {
    id: number;
    country: string;
    city: string | null;
    description: string;
    year: string | null;
    sort_order: number;
    created_at: string;
}

export interface PageContent {
    slug: string;
    title: string;
    content: string | null;
    image_url: string | null;
    meta_description: string | null;
    updated_at: string;
}

export interface ResumeItem {
    id: number;
    type: 'education' | 'experience' | 'award' | 'language' | 'certificate' | 'project';
    title: string;
    organization: string | null;
    start_date: string | null;
    end_date: string | null;
    description: string | null;
    sort_order: number;
    created_at: string;
}

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
}
