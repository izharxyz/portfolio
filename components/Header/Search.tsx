"use client";

import { MdOutlineSearch } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Search() {
    const pathname = usePathname();
    const shouldRenderSearchIcon = pathname?.startsWith("/blog");
    return (
        <>
            {shouldRenderSearchIcon && (
                <div>
                    <div className="hidden md:flex gap-2 items-center justify-center border rounded-full py-1 px-2 md:px-3 -mr-3">
                        <span className="text-xs flex gap-1 text-muted-foreground">
                            Search
                        </span>
                        <MdOutlineSearch className="h-5 w-5 text-muted-foreground hidden sm:block" />
                    </div>
                    <MdOutlineSearch className="h-5 w-5 text-foreground -mr-4 md:hidden" />
                </div>
            )}
        </>
    );
}
