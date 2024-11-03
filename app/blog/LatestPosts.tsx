import Card from "@/components/ui/PostCard";
import { PostResponse } from "@/types";

export default async function LatestPosts() {
    const featuredResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/`,
        { cache: "force-cache" }
    );

    const posts: PostResponse = await featuredResponse.json();

    // If there are fewer than 12 posts, repeat the posts until we have exactly 12
    if (posts.results.length < 12) {
        const repeatedPosts = [];
        while (repeatedPosts.length < 12) {
            repeatedPosts.push(...posts.results);
        }
        // Slice the array to get exactly 12 posts
        posts.results = repeatedPosts.slice(0, 12);
    }

    return (
        <>
            <h3 className="text-2xl md:text-3xl text-accent font-semibold">
                Latest Posts
            </h3>

            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xs md:max-w-lg">
                Here are some of the latest posts from the blog. Enjoy reading!
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.results.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </div>
        </>
    );
}
