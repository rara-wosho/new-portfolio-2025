import SectionTitle from "./ui/SectionTitle";

const ProjectsSection = () => {
    return (
        <div className="relative h-56 py-6">
            <SectionTitle>Projects</SectionTitle>
            <p
                className="uppercase text-8xl font-extrabold absolute text-center w-full top-28 text-transparent font-montserrat tracking-widest"
                style={{ WebkitTextStroke: "1px rgb(50,50,50)" }}
            >
                Projects
            </p>
        </div>
    );
};

export default ProjectsSection;
