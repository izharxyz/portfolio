import { Post } from "@/types";
import Card from "@/components/ui/PostCard";

export default async function RelatedPosts({ slug }: { slug: string }) {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/${slug}/related/`,
        { cache: "force-cache" }
    );
    const posts: Post[] = await response.json();

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            {posts.map((post, index) => (
                <Card key={index} post={post} />
            ))}
        </div>
    );
}
