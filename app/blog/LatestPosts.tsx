import Link from "next/link";
import { PrimaryButton } from "@/components/ui/Button";
import Card from "@/components/ui/PostCard";

export default function LatestPosts() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl text-accent font-semibold">
                    Latest Posts
                </h3>
                <Link href="/blog">
                    <PrimaryButton>View all posts</PrimaryButton>
                </Link>
            </div>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xs md:max-w-lg">
                Here are some of the latest posts from the blog. Enjoy reading!
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 6 }).map((_, index) => (
                    <Card
                        key={index}
                        post={{
                            title: "An awesome story of a web developer",
                            description:
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                            image: "/images/web4.jpeg",
                            categories: ["Web Development", "React", "Next.js"],
                            slug: "post-slug",
                        }}
                    />
                ))}
            </div>
        </>
    );
}
