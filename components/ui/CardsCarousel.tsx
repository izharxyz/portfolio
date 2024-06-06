"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type CardType = {
    image: string;
    title: string;
    description: string;
    category: string;
    detail: React.ReactNode;
};

const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => {},
    currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    const handleCardClose = (index: number) => {
        setCurrentIndex(index);
        if (carouselRef.current) {
            const cardWidth = window.innerWidth < 768 ? 230 : 384;
            const gap = window.innerWidth < 768 ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative w-full">
                <motion.div
                    className="flex w-full overflow-x-scroll py-10 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div className="flex flex-row gap-4 pl-4">
                        {items.map((item, index) => (
                            <motion.div
                                key={index}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
                <div className="flex justify-end gap-2 mr-10">
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <FaArrowLeftLong className="h-6 w-6 text-gray-500" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <FaArrowRightLong className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export const Card = ({
    card,
    index,
    layout = false,
}: {
    card: CardType;
    index: number;
    layout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const { onCardClose } = useContext(CarouselContext);

    useOutsideClick(containerRef, () => handleClose());

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 h-full w-full fixed inset-0"
                        />
                        <motion.div
                            ref={containerRef}
                            layoutId={layout ? `card-${card.title}` : undefined}
                            className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                        >
                            <button
                                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-foreground rounded-full flex items-center justify-center"
                                onClick={handleClose}
                            >
                                <RxCross1 className="h-6 w-6 text-primary-foreground" />
                            </button>
                            <p className="text-base font-medium">
                                {card.category}
                            </p>
                            <p className="text-2xl md:text-5xl font-semibold text-zinc-700 mt-4 dark:text-white">
                                {card.title}
                            </p>
                            <div className="py-10">{card.detail}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                layoutId={layout ? `card-${card.title}` : undefined}
                onClick={handleOpen}
                className="relative w-80 h-[26rem] md:w-[25rem] md:h-[36rem] rounded-xl bg-gray-100 dark:bg-zinc-900 overflow-hidden flex items-center justify-center"
            >
                <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover absolute inset-0"
                />

                {/* Staggered text on hover for large screens */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Visible text for smaller screens */}
                <div className="absolute inset-0 group flex flex-col items-center justify-center text-center text-zinc-50 bg-zinc-950/5 p-4">
                    <p className="text-sm uppercase lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-5 lg:group-hover:translate-y-0 transition duration-500">
                        {card.description}
                    </p>
                    <h3 className="text-2xl font-bold mt-2 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-5 lg:group-hover:translate-y-0 transition duration-500 delay-100">
                        {card.title}
                    </h3>
                    <p className="text-sm mt-2 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-y-5 lg:group-hover:translate-y-0 transition duration-500 delay-200">
                        {card.category}
                    </p>
                </div>
            </motion.button>
        </>
    );
};
