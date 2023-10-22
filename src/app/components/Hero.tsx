export default function Hero() {
    const render_letters = (text: string, key: string) => {
        return text.split("").map((letter, index) => (
            <span
                key={index}
                className={`inline-block opacity-100 name-animation name-animation-${key}`}
            >
                {letter}
            </span>
        ));
    };

    return (
        <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="col-span-1" aria-label="Mohamed Izhar">
                <h1 className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter">
                    <span className="block text-slate-300 text-[clamp(3rem,14vmin,14rem)]">
                        {render_letters("Mohamed", "first")}
                    </span>
                    <span className="-mt-[.2em] block text-slate-500">
                        {render_letters("Izhar", "last")}
                    </span>
                </h1>
                <span className="block text-2xl bg-gradient-to-tr from-purple-300 to-cyan-300 bg-clip-text uppercase tracking-[.2em] text-transparent opacity-100 md:text-4xl">
                    I create expreiences that inspire
                </span>
            </div>
        </div>
    );
}
