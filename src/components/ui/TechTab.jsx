const TechTab = ({ imgPath = "/images/programing.png", name, year }) => {
    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className="relative flex items-center justify-center group-hover:-translate-y-2 duration-300 transition-transform">
                <div className="flex items-center justify-center p-3 rounded-xl bg-neutral-900 blur-[2px] -right-2 -top-2 rotate-[40deg] absolute group-hover:rotate-0 duration-300 group-hover:-top-0 group-hover:-right-0">
                    <img src={imgPath} className="w-8 h-8" alt="" />
                </div>
                <div className="relative p-3 border border-neutral-700 backdrop-blur-md bg-neutral-300/10 rounded-xl z-10 shadow-md">
                    <img src={imgPath} className="w-8 h-8" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center cursor-default">
                <p className="text-xs">{name}</p>
                <p className="text-xs text-neutral-400 scale-0 group-hover:scale-95 duration-200">
                    {year}
                </p>
            </div>
        </div>
    );
};

export default TechTab;
