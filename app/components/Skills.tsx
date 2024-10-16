import Marquee from "@/components/ui/marquee";

const skills = [
    {
        name: "JavaScript",
        level: "Expert",
        description: "Proficient in JavaScript and its frameworks.",
    },
    {
        name: "TypeScript",
        level: "Intermediate",
        description: "Strong understanding of TypeScript for building robust applications.",
    },
    {
        name: "React",
        level: "Expert",
        description: "Extensive experience in building user interfaces with React.",
    },
    {
        name: "Node.js",
        level: "Intermediate",
        description: "Experience in building server-side applications using Node.js.",
    },
    {
        name: "CSS",
        level: "Expert",
        description: "Skilled in creating responsive and visually appealing designs.",
    },
    {
        name: "Python",
        level: "Intermediate",
        description: "Familiar with Python for scripting and automation tasks.",
    },
];

const SkillCard = ({
    name,
    level,
    description,
}: {
    name: string;
    level: string;
    description: string;
}) => {
    return (
        <div className="skill-card bg-white shadow-lg rounded-[15px] p-4 m-2 transition-transform transform hover:scale-105 cursor-pointer">
            <h3 className="text-lg font-bold text-gray-800">{name}</h3>
            <p className="text-sm font-medium text-gray-600">{level}</p>
            <p className="text-xs text-gray-500">{description}</p>
        </div>
    );
};

export default function Skills() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-[20px]">
            <div className="p-4">
                <div className='flex gap-4 justify-evenly items-center mb-12 min-h-[50px] overflow-hidden'>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='left'></div>
                    <h2 className="text-4xl text-center min-w-fit" id='center'>My Expertise</h2>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='right'></div>
                </div>
                <Marquee pauseOnHover className="[--duration:30s]">
                    {skills.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
                <div className='flex gap-4 justify-evenly items-center mt-12 min-h-[50px] overflow-hidden'>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='left'></div>
                    <h2 className="text-4xl text-center min-w-fit" id='center'>Click to explore</h2>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='right'></div>
                </div>
            </div>
        </div>
    );
}
