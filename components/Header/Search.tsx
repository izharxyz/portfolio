"use client";

import { MdOutlineSearch } from "react-icons/md";
import { usePathname } from "next/navigation";

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
} from "@/components/ui/SearchModal";
import { useState } from "react";

export default function Search() {
    const pathname = usePathname();
    const shouldRenderSearchIcon = pathname?.startsWith("/blog");

    const [inputValue, setInputValue] = useState("");
    return (
        <>
            {shouldRenderSearchIcon && (
                <Modal>
                    <ModalTrigger>
                        <div className="hidden md:flex gap-2 items-center justify-center border rounded-full py-1 px-2 md:px-3 -mr-3">
                            <span className="text-xs flex gap-1 text-muted-foreground">
                                Search{" "}
                                <span className="hidden xl:block">CtrlK</span>
                            </span>
                            <MdOutlineSearch className="h-5 w-5 text-muted-foreground hidden sm:block" />
                        </div>
                        <MdOutlineSearch className="h-5 w-5 text-foreground -mr-4 md:hidden" />
                    </ModalTrigger>
                    <ModalBody>
                        <ModalContent
                            onInputChange={(value) => {
                                setInputValue(value);
                            }}
                        >
                            <div className="h-full w-full">
                                <p className="mt-5">yo.......</p>
                            </div>
                        </ModalContent>
                    </ModalBody>
                </Modal>
            )}
        </>
    );
}
