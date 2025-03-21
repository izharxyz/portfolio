import { PostResponse } from "@/types";
import Card from "@/components/ui/PostCard";
import { TextHoverEffect } from "@/components/ui/TextHoverEffect";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function BlogPosts() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/?page_size=3`,
        { cache: "force-cache" }
    );
    const posts: PostResponse = await response.json();
    console.log(posts);

    return (
        <section id="blog" className="pt-16 md:pt-32">
            <div className="w-full max-w-2xl mx-auto h-48 -mt-14 z-30">
                <TextHoverEffect text="BLOGS" />
            </div>
            <h2 className="container text-4xl md:text-5xl mb-5 font-bold text-purple-600 text-center">
                Dive into my thoughts
            </h2>
            <p className="text-muted-foreground text-sm md:text-base text-center mb-10">
                Explore my latest blog posts and read about my experiences,
                thoughts, and ideas.{" "}
                <Link
                    href="/blog"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500 group"
                >
                    Explore all posts
                    <FaArrowRightLong className="inline-block ml-2 h-4 w-4 text-pink-500 group-hover:translate-x-2 transition duration-300" />
                </Link>
            </p>
            <div className="container overflow-x-hidden w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                {posts.results.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </div>
        </section>
    );
}
