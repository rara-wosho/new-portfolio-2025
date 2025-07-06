function SectionTitle({ children }) {
    return (
        <div className="flex items-center">
            <p className="bg-gradient-to-t from-violet-950 bg-clip-text text-transparent to-violet-300 mb-3 font-bold text-[25px] tracking-wide font-montserrat uppercase">
                {children}
            </p>
        </div>
    );
}

export default SectionTitle;
