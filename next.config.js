/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config) => {
        config.infrastructureLogging = {
            level: "error",
        };

        return config;
    },
    images: {
        domains:[
            "images.pexels.com",
            "pixabay.com"
        ]
    }
}

module.exports = nextConfig
