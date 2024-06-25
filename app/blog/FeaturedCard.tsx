import Image from "next/image";
import Link from "next/link";

import { RiTimer2Line } from "react-icons/ri";
import { CgCalendarTwo } from "react-icons/cg";

import { PrimaryButton } from "@/components/ui/Button";
import { Post } from "@/types";

export default function FeaturedCard({ post }: { post: Post }) {
    return (
        <div className="p-4 border flex flex-col gap-5 md:gap-10 md:flex-row-reverse w-full overflow-x-hidden">
            <Link
                href={`/blog/${post.slug}`}
                className="w-full md:w-1/2 relative"
            >
                <Image
                    src={post.image}
                    height={1000}
                    width={1000}
                    alt={post.title}
                    className="h-full w-full object-cover aspect-video"
                />
                <div className="absolute bottom-0 h-14 md:h-24 w-full bg-zinc-950/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-zinc-100 font-light text-sm text-center uppercase">
                        Featured
                    </span>
                </div>
            </Link>
            <div className="w-full md:w-1/2 bg-card flex flex-col items-start justify-center">
                <div className="w-full md:max-w-lg">
                    <div className="mb-4 flex items-center justify-start">
                        <CgCalendarTwo className="h-5 w-5 text-muted-foreground" />
                        <span className="text-muted-foreground text-xs md:text-sm font-light ml-2 uppercase">
                            {new Date(post.updated_at).toLocaleDateString(
                                "en-GB",
                                {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                }
                            )}
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl text-primary">
                        {post.title}
                    </h2>
                    <div className="flex gap-3 text-xs md:text-sm text-accent mt-4">
                        {post.categories?.map((category) => (
                            <span key={category.id} className="uppercase">
                                {category.name}
                            </span>
                        ))}
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base my-4">
                        {post.description}
                    </p>
                    <div className="flex flex-row justify-between gap-5 md:flex-row-reverse md:justify-end items-center w-full">
                        <div className="text-muted-foreground text-xs md:text-sm font-light uppercase flex items-center justify-start">
                            <RiTimer2Line className="h-5 w-5 mr-2" />
                            <span>5 min read</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                            <PrimaryButton>Read more</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
