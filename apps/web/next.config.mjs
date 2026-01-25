import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Cloudflare Pages Image Loader? Or just standard next/image works with custom loader on Pages usually.
    // For now standard.
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

if (process.env.NODE_ENV === 'development') {
    (async () => {
        await setupDevPlatform();
    })();
}

export default nextConfig;
