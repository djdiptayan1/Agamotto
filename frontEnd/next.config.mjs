/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['assets.aceternity.com', 'images.indianexpress.com', 'bsmedia.business-standard.com', 'images.newscientist.com', 'i.guim.co.uk'],
    }
};

export default nextConfig;
