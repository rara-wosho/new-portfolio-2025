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
                <SectionTitle>Specialization</SectionTitle>
                <p className="text-xs uppercase leading-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                    voluptas quia porro deleniti sequi dolores quam. Optio
                    nostrum voluptate similique minima necessitatibus id,
                    facilis at rem consectetur sunt ducimus ab.
                </p>
            </Box>
        </div>
    );
}

export default AboutSection;
