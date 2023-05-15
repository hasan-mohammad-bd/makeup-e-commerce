/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";

const nextConfig = {
    env: {
        server: dev ? "http://localhost:3004" : "http://localhost:3004"
    },
}

module.exports = nextConfig