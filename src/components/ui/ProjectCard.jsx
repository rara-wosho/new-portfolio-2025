import Box from "./Box";

const ProjectCard = ({ title, number }) => {
    return (
        <Box>
            <div className="overflow-hidden">
                <p className="text-6xl font-bold text-violet-500/90 font-mono -translate-x-4 mb-4">
                    {number}
                </p>

                <div className="bg-green-700 size-2 rounded-full animate-pulse absolute left-20 top-9"></div>

                <p className="font-bold mb-2">{title}</p>

                <p className="text-gray-400 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Incidunt, non.
                </p>
            </div>
        </Box>
    );
};

export default ProjectCard;
