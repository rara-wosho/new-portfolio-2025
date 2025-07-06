const Box = ({ children, containerStyle }) => {
    return (
        <div
            className={`hover:bg-violet-500/5 hover:border-violet-500/40 bg-gradient-to-tl from-violet-500/0 from-30% via-violet-200/5 via-85% to-violet-300/10 duration-300 border border-gray-500/15 p-4 md:p-6 backdrop-blur-sm hover:backdrop-blur-md ${containerStyle}`}
        >
            {children}
        </div>
    );
};

export default Box;
