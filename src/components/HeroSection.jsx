import Avatar from "./ui/Avatar";

export default function HeroSection() {
    return (
        <div className="flex items-center flex-col mb-8">
            <Avatar />

            <p className="text-4xl font-extrabold tracking-wider font-montserrat uppercase mb-2 text-slate-300">
                Israel De Vera
            </p>

            <div className="flex items-center gap-3">
                <p className="text-slate-400 uppercase border-e border-neutral-700 pe-4">
                    Front end developer
                </p>
                <p className="text-slate-500">Jimenez Misamis Occidental</p>
            </div>
            {/* <p className="text-slate-400 text-sm">raeldevera.email@gmail.com</p> */}
        </div>
    );
}
