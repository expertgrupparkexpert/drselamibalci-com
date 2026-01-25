import type { Post, ContactFormInput, Video, Activity, PageContent, ResumeItem } from '@repo/shared';
import { POSTS, VIDEOS, ACTIVITIES, RESUME_ITEMS } from './data';

// Mock async functions to keep component interfaces same
export async function getPosts(): Promise<Post[]> {
    return POSTS;
}

export async function getPost(slug: string): Promise<Post | null> {
    return POSTS.find(p => p.slug === slug) || null;
}

export async function getVideos(): Promise<Video[]> {
    return VIDEOS;
}

export async function getActivities(): Promise<Activity[]> {
    return ACTIVITIES;
}

export async function getPageContent(slug: string): Promise<PageContent | null> {
    // Static content for pages not in data.ts yet (can be added later)
    return null;
}

export async function getResumeItems(): Promise<ResumeItem[]> {
    return RESUME_ITEMS;
}

export async function submitContact(data: ContactFormInput): Promise<{ success: boolean; error?: string }> {
    // Client-side only log, actual submission removed
    console.log("Contact form submitted (Static Mode):", data);
    return { success: true };
}

// --- ADMIN API (Removed/No-op) ---
export async function createPost(token: string, data: any) { return {}; }
export async function updatePost(token: string, slug: string, data: any) { return {}; }
export async function deletePost(token: string, slug: string) { return {}; }

