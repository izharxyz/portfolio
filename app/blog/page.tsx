import FeaturedCard from "./FeaturedCard";
import { CategoryCarousel } from "./CategoryCarousel";
import { Category } from "@/types";

import LatestPosts from "./LatestPosts";

export default function Blog() {
    return (
        <main className="container w-full my-32 min-h-screen h-fit">
            <div className="p-4 border rounded-xl">
                <FeaturedCard post={post} />
            </div>

            <div className="pt-16 md:pt-32 text-center">
                <h3 className="text-2xl md:text-3xl text-accent font-semibold">
                    Browse by Category
                </h3>
                <p className="text-muted-foreground text-sm md:text-base mt-4 mb-10">
                    Explore more stories and tutorials by category.
                </p>
                <CategoryCarousel items={categories} />
            </div>

            <div className="pt-16 md:pt-32">
                <LatestPosts />
            </div>
        </main>
    );
}

const post = {
    title: "An awesome story of a web developer",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/images/web4.jpeg",
    categories: ["Web Development", "React", "Next.js"],
    slug: "post-slug",
};

const categories: Category[] = [
    {
        id: 1,
        name: "Web Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "web-development",
    },
    {
        id: 2,
        name: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "react",
    },
    {
        id: 3,
        name: "Next.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "next-js",
    },
    {
        id: 4,
        name: "Tailwind CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "tailwind-css",
    },
    {
        id: 5,
        name: "TypeScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "typescript",
    },
    {
        id: 6,
        name: "GraphQL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "graphql",
    },
    {
        id: 7,
        name: "Node.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "node-js",
    },
    {
        id: 8,
        name: "Express.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "express-js",
    },
    {
        id: 9,
        name: "MongoDB",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "mongodb",
    },
    {
        id: 10,
        name: "Deno",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "deno",
    },
    {
        id: 11,
        name: "Svelte",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "svelte",
    },
    {
        id: 12,
        name: "Vue.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "vue-js",
    },
    {
        id: 13,
        name: "Angular",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "/images/web4.jpeg",
        slug: "angular",
    },
];
