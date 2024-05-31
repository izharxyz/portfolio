import Image from "next/image";
import Link from "next/link";

export default function Logo({ height = 64, width = 64 }) {
    return (
        <Link href="/" className="w-full flex items-center justify-center">
            <Image src="/logo.svg" height={height} width={width} alt="logo" />
        </Link>
    );
}
