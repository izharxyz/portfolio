export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://zzed.me/sitemap.xml",
        host: "https://zzed.me",
    };
}
