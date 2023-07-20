/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    },
    images: {
        domains: ['i.pinimg.com'],
    },
    features: {
        middleware: true,
    },
}

module.exports = nextConfig
