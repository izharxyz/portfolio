import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const description =
    "Hello! I'm Mohamed Izhar, a passionate developer and enthusiast. Welcome to my portfolio! I specialize in web development and am passionate about exploring cutting-edge technologies to build seamless, engaging digital experiences.";

export const metadata: Metadata = {
    title: "Mohamed Izhar",
    description,
    keywords: [
        "Mohamed Izhar",
        "web developer portfolio",
        "UI/UX design",
        "frontend developer",
        "backend developer",
        "React developer",
        "Next.js portfolio",
        "TypeScript developer",
        "web application design",
    ],
    openGraph: {
        title: "I create digital experiences that inspire",
        description,
        type: "website",
        url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_SITE_URL}/preview.png`,
                width: 1200,
                height: 630,
                alt: "Mohamed Izhar portfolio preview image",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        site: "@TwitterHandle",
        title: "I create digital experiences that inspire",
        description,
        images: `${process.env.NEXT_PUBLIC_SITE_URL}/preview.png`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
