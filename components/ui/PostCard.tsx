import Image from "next/image";
import Link from "next/link";
import { LuAlarmClock } from "react-icons/lu";
import { Post } from "@/types";

export default function Card({ post }: { post: Post }) {
    return (
        <div className="w-full p-4 border">
            <div className="aspect-video w-full">
                <Link href={`/blog/${post.slug}`}>
                    <Image
                        src={post.image}
                        height={500}
                        width={500}
                        alt={post.title}
                        className="h-full w-full object-cover"
                    />
                </Link>
            </div>
            <div className="flex gap-2 mt-4 text-accent text-xs md:text-sm uppercase">
                {post.categories?.map((category) => (
                    <span key={category.id}>{category.name}</span>
                ))}
            </div>
            <h3 className="text-lg md:text-xl font-semibold mt-4">
                {post.title}
            </h3>
            <p className="text-sm md:text-base mt-2 text-muted-foreground line-clamp-2">
                {post.description}
            </p>
            <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <LuAlarmClock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground text-xs ml-2">
                        {new Date(post.updated_at).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })}
                    </span>
                </div>
                <p className="text-xs text-muted-foreground uppercase">
                    5 min read
                </p>
            </div>
        </div>
    );
}
