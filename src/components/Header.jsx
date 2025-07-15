export default function Header() {
    return (
        <header className="flex flex-col items-center pt-6">
            {/* aspiring pill */}
            <div>
                <div className="w-full px-4 py-1.5 gap-2 inline-flex items-center justify-center mb-2 text-emerald-500 border border-emerald-700 rounded-full">
                    <p className="tracking-widest uppercase text-xs inline-flex items-center">
                        Open for Commissions
                    </p>
                    <div className="relative">
                        <div className="size-2 aspect-square animate-ping bg-green-500 rounded-full"></div>
                        <div className="size-2 aspect-square bg-green-500 rounded-full absolute top-0 left-0"></div>
                    </div>
                </div>
            </div>
            <p
                className="text-[70px] flex items-start text-center font-extrabold text-transparent uppercase leading-[95px] tracking-[1px] bg-clip-text bg-[linear-gradient(to_top,_rgba(0,0,0,0)_20%,_rgb(30,30,40)_70%,_rgb(90,90,95)_100%)]"
                style={{
                    WebkitTextStroke: "1px rgb(60,60,70)",
                }}
            >
                <span className="px-4">Code</span>
                <span className="px-4">Create</span>
                <span className="px-4">Innovate</span>
            </p>
        </header>
    );
}
