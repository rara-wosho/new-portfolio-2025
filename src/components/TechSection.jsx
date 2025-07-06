import SectionTitle from "./ui/SectionTitle";
import TechTab from "./ui/TechTab";

const frontend = [
    { tech: "Next JS", year: "2025" },
    { tech: "Supabase", year: "2025" },
    { tech: "Next JS", year: "2025" },
];

const TechSection = () => {
    return (
        <div className="mt-6">
            <SectionTitle>Tech Stack</SectionTitle>
            <p className="mb-2">Front End</p>
            <div className="grid grid-cols-5 mb-8 gap-2">
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
            </div>
            <p className="mb-2">Back End</p>
            <div className="grid grid-cols-5 mb-8 gap-2">
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
            </div>
            <p className="mb-2">Others</p>
            <div className="grid grid-cols-5 mb-8 gap-2">
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
                <TechTab />
            </div>
        </div>
    );
};

export default TechSection;
