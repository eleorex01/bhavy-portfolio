import TechStack from "./TechSection";


export default function Skills() {
    return (
        <div className="relative w-full overflow-hidden rounded-[20px] container mx-auto">
            <div className="p-4">
                <div className='flex gap-4 justify-evenly items-center mb-12 min-h-[50px] overflow-hidden'>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='left'></div>
                    <h2 className="text-4xl text-center min-w-fit" id='center'>{`Dealing with Code, One Stack at a Time :)`}</h2>
                    <div className='w-full h-[2px] bg-opacity-5 bg-white' id='right'></div>
                </div>
                <TechStack />
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
