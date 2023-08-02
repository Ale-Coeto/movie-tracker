/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        domains: ['tmdb.org', 'themoviedb.org'],
    }
}

module.exports = nextConfig
