export { default } from "next-auth/middleware"

export const config = { matcher: ["/administration/:path*", "/technologies/:path*", "/api/:path*"] }