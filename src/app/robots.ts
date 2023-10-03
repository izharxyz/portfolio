export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://izhar.xyz/sitemap.xml",
        host: "https://izhar.xyz",
    };
}
