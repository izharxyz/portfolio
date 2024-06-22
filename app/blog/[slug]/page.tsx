import Image from "next/image";
import { Post } from "@/types";

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const slug = (await params).slug;
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/blog/posts/${slug}/`,
        { cache: "force-cache" }
    );

    const post: Post = await response.json();

    return (
        <main className="min-h-screen w-screen overflow-x-hidden">
            <div className="h-screen w-full container relative">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1900}
                    height={1000}
                    className="h-screen object-cover"
                />
                <div className="absolute inset-0 h-screen bg-gradient-to-r from-background via-transparent to-background" />
                <div className="absolute inset-0 h-screen bg-gradient-to-b from-background to-transparent backdrop-blur-lg">
                    <div className="container h-full w-full max-w-4xl flex flex-col justify-end items-end py-16 text-primary">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            {post.title}
                        </h1>
                        <div className="mt-5 flex gap-2 justify-start items-center w-full">
                            {post.categories?.map((category) => (
                                <span
                                    key={category.id}
                                    className="text-xs md:text-sm uppercase text-purple-800 dark:text-purple-400 border border-purple-800 dark:border-purple-400 py-1 px-3 rounded-full bg-accent/10 backdrop-blur-xl"
                                >
                                    {category.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
