export default function Navbar() {
    return (
        <header className="absolute top-2 z-50 md:sticky mx-auto max-w-7xl bg-slate-700 flex justify-between items-center p-2 rounded-xl m-2 bg-opacity-50 backdrop-blur-3xl">
            <a
                href="/"
                className="p-2 text-xl bg-gradient-to-tr from-purple-300 to-cyan-300 bg-clip-text tracking-[.2em] text-transparent"
            >
                Mohamed Izhar
            </a>
            <nav className="flex items-center space-x-4">
                <a
                    href="/about"
                    className="bg-slate-600 text-slate-100 px-3 py-2 rounded-xl"
                >
                    About
                </a>
                <a
                    href="/projects"
                    className="bg-slate-600 text-slate-100 px-3 py-2 rounded-xl"
                >
                    Projects
                </a>
                <a
                    href="/blog"
                    className="bg-slate-600 text-slate-100 px-3 py-2 rounded-xl"
                >
                    Blog
                </a>
                <a
                    href="/contact"
                    className="bg-slate-600 text-slate-100 px-3 py-2 rounded-xl"
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}
