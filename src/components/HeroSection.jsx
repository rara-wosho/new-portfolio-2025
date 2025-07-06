import Avatar from "./ui/Avatar";

export default function HeroSection() {
    return (
        <div className="flex items-center flex-col">
            <Avatar />

            <p className="text-4xl font-extrabold tracking-wider font-montserrat uppercase mb-1 text-slate-300">
                Israel De Vera
            </p>

            <p className="text-slate-300">Jimenez, Misamis Occidental</p>
            <p className="text-slate-400 text-sm">raeldevera.email@gmail.com</p>
        </div>
    );
}
