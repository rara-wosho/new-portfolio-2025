const PrimaryButton = ({ containerStyle, label }) => {
    return (
        <div
            className={`${containerStyle} inline-flex items-center gap-2 text-sm bg-gradient-to-b from-violet-400 from-10% font-semibold to-violet-900 to-80% py-2 px-4 tracking-wide`}
        >
            {label}
        </div>
    );
};

export default PrimaryButton;
