import ProjectCard from "./ui/ProjectCard";
import SectionTitle from "./ui/SectionTitle";

const ProjectsSection = () => {
    return (
        <div className="relative py-6 mb-8">
            <SectionTitle>Projects</SectionTitle>
            {/* <p
                className="uppercase text-8xl font-extrabold absolute text-center w-full top-56 text-transparent font-montserrat tracking-widest"
                style={{ WebkitTextStroke: "1px rgb(50,50,50)" }}
            >
                Projects
            </p> */}

            <div className="grid grid-cols-3 gap-3">
                <ProjectCard title="QFLOW App" number="01" />
                <ProjectCard title="Sabuag Portal" number="02" />
                <ProjectCard title="EventTasker" number="03" />
                <ProjectCard title="FurniFlex" number="04" />
                <ProjectCard title="Client Portfolio" number="05" />
                <ProjectCard title="Expense Tracker App" number="06" />
            </div>
        </div>
    );
};

export default ProjectsSection;
