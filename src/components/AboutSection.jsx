import Box from "./ui/Box";
import SectionTitle from "./ui/SectionTitle";

function AboutSection() {
    return (
        <div className="grid grid-cols-2 text-slate-400 backdrop-blur-md gap-3">
            <Box>
                <SectionTitle>About</SectionTitle>
                <p className="text-xs uppercase leading-5 mb-2">
                    A former BSBA-MM student with an interest in
                    entrepreneurship, but ended up diving into coding.
                </p>
                <p className="text-xs uppercase leading-5">
                    I am a passionate and driven IT student with a keen interest
                    in front-end development and design. I thrive on crafting
                    innovative solutions and creating engaging digital
                    experiences that leave a lasting impact. My journey into the
                    world of technology began with a fascination for the endless
                    possibilities it offers to shape the future.
                </p>
            </Box>
            <Box>
                <SectionTitle>Current Project</SectionTitle>
                <h1 className="text-neutral-200 font-medium mb-2">
                    InternMatch
                </h1>
                <p className="text-xs uppercase leading-5 mb-3">
                    A web-based platform that helps students find a suitable
                    internship base on their skills and capabilities.
                </p>

                <div className="border border-emerald-800 text-emerald-600 inline-flex px-3 rounded-full text-xs py-1 bg-emerald-800/20">
                    Ongoing
                </div>
            </Box>
        </div>
    );
}

export default AboutSection;
