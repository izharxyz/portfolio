import FeaturedCard from "./FeaturedCard";
import { CategoryCarousel } from "./CategoryCarousel";
import { CategoryResponse, Post } from "@/types";

import LatestPosts from "./LatestPosts";

export default async function Blog() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/categories/`,
        { cache: "force-cache" }
    );

    const catergoryResponse: CategoryResponse = await response.json();

    const featuredResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/featured/`,
        { cache: "force-cache" }
    );

    const featuredPost: Post = await featuredResponse.json();

    return (
        <main className="container w-full my-32 min-h-screen h-fit">
            <div className="p-4 border rounded-xl">
                <FeaturedCard post={featuredPost} />
            </div>

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
        </main>
    );
}
