import Card from "@/components/ui/PostCard";
import { PostResponse } from "@/types";

export default async function PostsByCategory({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;

    let posts: PostResponse | null = null;

    try {
        const postResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/blog/categories/${slug}/`,
            { cache: "force-cache" }
        );

        if (!postResponse.ok) {
            throw new Error("Failed to fetch posts");
        }

        posts = await postResponse.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
    }

    // Default to an empty array if posts are null or results are undefined
    const results = posts?.results || [];

    // Find the current category
    const currentCategory =
        results.length > 0
            ? results[0].categories?.find((category) => category.slug === slug)
            : null;

    return currentCategory ? (
        <div className="w-full container">
            <h3 className="text-2xl md:text-3xl text-accent font-semibold">
                Browse {currentCategory.name}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xs md:max-w-lg">
                {currentCategory.description}
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {results.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </div>
        </div>
    ) : (
        <div className="container w-full min-h-screen flex justify-center items-center">
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-xs md:max-w-lg">
                No posts found
            </p>
        </div>
    );
}
