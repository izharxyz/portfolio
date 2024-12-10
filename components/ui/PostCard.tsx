import Image from "next/image";
import Link from "next/link";
import { RiTimer2Line } from "react-icons/ri";
import { CgCalendarTwo } from "react-icons/cg";
import { MdArrowOutward } from "react-icons/md";

import { Post } from "@/types";

export default function Card({ post }: { post: Post }) {
    return (
        <div className="w-full p-4 border flex flex-col gap-4">
            {/* Post thumbnail */}
            <div className="aspect-video w-full relative">
                <Link href={`/blog/${post.slug}`} className="">
                    <Image
                        src={post.image}
                        height={500}
                        width={500}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/70 border flex items-center justify-center">
                        <MdArrowOutward className="h-4 w-4 text-muted-foreground " />
                    </div>
                </Link>
            </div>

            {/* Post categories, title, desc, and update time */}
            <div className="flex flex-col w-full h-full">
                <div>
                    <div className="flex gap-2 flex-wrap text-accent text-xs md:text-sm uppercase">
                        {post.categories?.map((category) => (
                            <span key={category.id} className="text-nowrap">
                                {category.name}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold mt-4">
                        {post.title}
                    </h3>
                    <p className="text-sm md:text-base mt-2 text-muted-foreground line-clamp-2">
                        {post.description}
                    </p>
                </div>
                <div className="grow mt-4 flex items-end justify-between">
                    <div className="flex items-center justify-start">
                        <CgCalendarTwo className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground text-xs ml-2 uppercase">
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
                    <p className="text-xs text-muted-foreground uppercase flex items-center justify-end">
                        <RiTimer2Line className="h-4 w-4 mr-2" />{" "}
                        {post.reading_time} min read
                    </p>
                </div>
            </div>
        </div>
    );
}
