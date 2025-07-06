export default function Header() {
    return (
        <header className="flex flex-col items-center pt-6">
            {/* aspiring pill */}
            <div>
                <div className="w-full px-4 py-1 gap-2 inline-flex items-center justify-center mb-2 text-violet-500 border border-violet-700 rounded-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sparkles-icon lucide-sparkles"
                    >
                        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
                        <path d="M20 3v4" />
                        <path d="M22 5h-4" />
                        <path d="M4 17v2" />
                        <path d="M5 18H3" />
                    </svg>
                    <p className="tracking-widest uppercase text-xs inline-flex items-center">
                        Aspiring
                    </p>
                </div>
            </div>
            <p
                className="text-[110px] border-b-0 border-neutral-900 pb-12 text-center font-extrabold font-montserrat text-transparent uppercase leading-[95px] tracking-[6px] bg-clip-text bg-[linear-gradient(to_top,_rgba(0,0,0,0)_20%,_rgb(30,30,40)_70%,_rgb(90,90,95)_100%)]"
                style={{
                    WebkitTextStroke: "1px rgb(60,60,70)",
                }}
            >
                software engineer
            </p>
        </header>
    );
}
