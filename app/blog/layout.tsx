import React from "react";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="pt-32 pb-16 md:pb-32 min-h-screen">{children}</main>
    );
}
