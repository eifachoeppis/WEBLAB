/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    DB_NAME: process.env.DB_NAME,
    TECHNOLOGIES_COLLECTION_NAME: process.env.TECHNOLOGIES_COLLECTION_NAME,
    USERS_COLLECTION_NAME: process.env.USERS_COLLECTION_NAME,
    LOGS_COLLECTION_NAME: process.env.LOGS_COLLECTION_NAME,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET
  }
}

module.exports = nextConfig
