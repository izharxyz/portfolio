import { Metadata } from "next";

import FeaturedCard from "./FeaturedCard";
import { CategoryCarousel } from "./CategoryCarousel";
import { CategoryResponse, Post } from "@/types";

import LatestPosts from "./LatestPosts";

export async function generateMetadata(): Promise<Metadata> {
    const title = "Blog | Mohamed Izhar";
    const description =
        "Welcome to my blog! Here you can find stories, tutorials, and more.";

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
            type: "website",
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}/preview.png`,
                    alt: "Mohamed Izhar portfolio preview image",
                    width: 1200,
                    height: 630,
                },
            ],
            siteName: "Mohamed Izhar",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${process.env.NEXT_PUBLIC_SITE_URL}/preview.png`],
        },
    };
}

export default async function Blog() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/categories/?page=1&page_size=36`,
        { cache: "force-cache" }
    );

    const catergoryResponse: CategoryResponse = await response.json();

    const featuredResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/featured/`,
        { cache: "force-cache" }
    );

    const featuredPost: Post = await featuredResponse.json();

    return (
        <div className="container w-full h-fit pt-32 pb-16 md:pb-32">
            <FeaturedCard post={featuredPost} />

            <div className="pt-16 md:pt-32 text-left">
                <h3 className="text-2xl md:text-3xl text-accent font-semibold">
                    Browse by Category
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mt-2 mb-10">
                    Explore more stories and tutorials by category.
                </p>
                <CategoryCarousel items={catergoryResponse.results} />
            </div>

            <div className="pt-16 md:pt-32">
                <LatestPosts />
            </div>
        </div>
    );
}
