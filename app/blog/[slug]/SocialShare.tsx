import Link from "next/link";
import { FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface SocialShareProps {
    title: string;
    slug: string;
}

export default function SocialShare({ title, slug }: SocialShareProps) {
    const encodedTitle = encodeURIComponent(title);
    const fullUrl = encodeURIComponent(
        `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`
    );

    const platforms = [
        {
            icon: <FaXTwitter className="h-6 w-6 md:h-7 md:w-7" />,
            url: `https://x.com/intent/tweet?url=${fullUrl}&text=${encodedTitle}`,
            label: "Share on Twitter",
        },
        {
            icon: <FaLinkedin className="h-6 w-6 md:h-7 md:w-7" />,
            url: `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${encodedTitle}`,
            label: "Share on LinkedIn",
        },
        {
            icon: <FaFacebook className="h-6 w-6 md:h-7 md:w-7" />,
            url: `https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`,
            label: "Share on Facebook",
        },
        {
            icon: <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" />,
            url: `https://wa.me/?text=${encodedTitle}%20${fullUrl}`,
            label: "Share on WhatsApp",
        },
        {
            icon: <FaEnvelope className="h-6 w-6 md:h-7 md:w-7" />,
            url: `mailto:?subject=${encodedTitle}&body=${fullUrl}`,
            label: "Share via Email",
        },
    ];

    return (
        <div className="flex gap-4">
            {platforms.map((platform, index) => (
                <Link
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.label}
                    className="flex items-center justify-center"
                >
                    {platform.icon}
                </Link>
            ))}
        </div>
    );
}
