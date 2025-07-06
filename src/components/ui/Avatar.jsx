export default function Avatar() {
    return (
        <div className="w-44 h-44 aspect-square bg-neutral-950 p-3 rounded-full mb-1 relative after:absolute after:w-[calc(100vw-22px)] after:h-[1px] after:left-1/2 after:-translate-x-[50%] after:bg-[linear-gradient(to_right,_rgb(10,10,10)_0%,_rgb(50,50,80)_50%,_rgb(10,10,10)_100%)] after:top-24 after:-z-10">
            <img
                src="/images/IMG_0188-min.JPG"
                alt=""
                className="w-full aspect-square rounded-full object-cover"
            />
        </div>
    );
}
