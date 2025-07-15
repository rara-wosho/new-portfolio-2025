import SectionTitle from "./ui/SectionTitle";
import TechTab from "./ui/TechTab";

const frontend = [
    { imgPath: "/images/nextjs.png", tech: "Next JS", year: "2025" },
    { imgPath: "/images/supabase.png", tech: "Supabase", year: "2025" },
    {
        imgPath: "/images/icons8-firebase-48.png",
        tech: "Firebase",
        year: "2024",
    },
    {
        imgPath: "/images/icons8-material-ui-48.png",
        tech: "Material UI",
        year: "2024",
    },
    { imgPath: "/images/shadcn.png", tech: "Shadcn", year: "2025" },
    {
        imgPath: "/images/icons8-tailwind-css-48.png",
        tech: "Tailwind CSS",
        year: "2024",
    },
    {
        imgPath: "/images/programing.png",
        tech: "React Native",
        year: "2024",
    },
    {
        imgPath: "/images/programing.png",
        tech: "React JS",
        year: "2023",
    },
    {
        imgPath: "/images/js.png",
        tech: "Javascript",
        year: "2023",
    },
];

const TechSection = () => {
    return (
        <div className="mt-6">
            <div className="mb-4 flex justify-center">
                <SectionTitle>Tech Stack</SectionTitle>
            </div>
            <div className="grid grid-cols-9 mb-8 gap-x-2 gap-y-8">
                {frontend.map((tab) => (
                    <TechTab
                        key={tab.tech}
                        imgPath={tab.imgPath}
                        name={tab.tech}
                        year={tab.year}
                    />
                ))}
            </div>
        </div>
    );
};

export default TechSection;
