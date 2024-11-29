import React from "react";
import { MotionProps, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export const RevealBento = () => {
    return (
        <div className=" bg-zinc-900 px-4 py-12 text-zinc-50">
            <motion.div
                initial="initial"
                animate="animate"
                transition={{
                    staggerChildren: 0.05,
                }}
                className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
            >
                <HeaderBlock />
                <SocialsBlock />
                <AboutBlock />
            </motion.div>
        </div>
    );
};

type BlockProps = {
    className?: string;
} & MotionProps;

const Block = ({ className, ...rest }: BlockProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    scale: 0.5,
                    y: 50,
                    opacity: 0,
                },
                animate: {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                },
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
            className={twMerge(
                "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
                className
            )}
            {...rest}
        />
    );
};

const HeaderBlock = () => (
    <Block className="col-span-12 row-span-2 md:col-span-6">
        <img
            src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
            alt="avatar"
            className="mb-4 size-14 rounded-full"
        />
        <h1 className="mb-12 text-4xl font-medium leading-tight">
            {`Hi, I'm Bhavy. `}
            <span className="text-zinc-400">
                I build cool websites like this one.
            </span>
        </h1>
        <a
            href="#"
            className="flex items-center gap-1 text-red-300"
        >
            Contact me
            <svg className="rotate-[10deg]" width="150" height="30" viewBox="0 0 207 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clip-rule="evenodd" d="M184.005 0.213186C182.621 0.77654 181.659 2.20837 181.659 3.71065C181.659 5.58849 182.409 6.41007 186.211 8.66349C188.557 10.0484 192.945 13.3111 193.109 13.8041C193.25 14.2031 190.622 14.3205 187.619 14.0388C183.559 13.6867 181.377 13.2877 177.388 12.161C171.006 10.4005 165.82 9.57892 161.009 9.57892C152.539 9.57892 146.367 12.4661 142.472 18.2639C139.563 22.6299 137.005 25.3528 135.503 25.7519C134.236 26.104 131.632 25.7519 126.516 24.5782C115.23 21.9727 110.936 21.5032 106.055 22.3717C98.3114 23.7097 92.6095 27.5123 85.8282 35.8218C80.4547 42.4177 78.9295 43.1219 70.6699 42.8402C63.0673 42.582 57.5061 41.8779 47.4397 39.9765C40.2594 38.5916 35.9184 38.3569 31.6948 39.0611C26.9079 39.8592 20.6663 42.4177 15.7856 45.5631C9.70821 49.5066 3.32578 55.7035 0.650786 60.3277C-0.405132 62.1351 -0.147018 63.567 1.21394 63.567C1.7067 63.567 2.62183 62.7923 5.81305 59.6235C11.6793 53.8022 15.6917 50.7742 21.3468 47.9104C25.6408 45.7274 29.841 44.5069 34.0882 44.1782C36.6458 43.9905 39.6493 44.4364 47.0642 46.103C57.9285 48.5208 64.2874 49.3423 72.899 49.3423C78.8591 49.3658 79.9385 49.2015 82.7308 47.7931C85.7578 46.2673 87.6349 44.5773 90.7558 40.6338C91.7413 39.3662 93.7358 37.1598 95.1672 35.7279C98.1003 32.7938 100.588 31.1272 103.615 30.0474C108.378 28.3104 112.32 28.4982 122.339 30.916C131.89 33.2163 134.588 33.5214 137.568 32.5825C140.994 31.5262 142.895 29.6484 147.611 22.6534C150.849 17.8884 153.243 16.7382 159.836 16.7617C163.027 16.7852 163.919 16.8791 167.11 17.5363C169.105 17.9588 172.578 18.8273 174.807 19.4611C177.036 20.0949 179.781 20.7756 180.908 20.9634C183.864 21.4563 189.918 21.8319 192.077 21.6441C193.837 21.4798 193.931 21.5033 193.743 21.9258C193.626 22.1605 193.274 23.0994 192.969 24.0148C191.842 27.1602 192.265 34.6716 193.626 35.3993C194.189 35.7044 194.376 35.4697 195.573 33.052C196.324 31.5028 198.06 28.9442 201.275 24.6017C203.809 21.1746 206.085 17.9588 206.367 17.4424C206.672 16.8321 206.86 16.034 206.86 15.2125C206.883 12.8182 205.71 11.4098 203.012 10.6118C201.909 10.2831 201.486 9.95452 199.539 7.91236C194.752 2.86565 186.985 -0.960467 184.005 0.213186Z" fill="currentColor" />
            </svg>
        </a>
    </Block>
);


const SocialsBlock = () => (
    <>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-red-500 md:col-span-3"
        >
            <a
                href="https://www.linkedin.com/in/bhavy-jogani/"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <LinkedInLogoIcon />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-green-600 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <InstagramLogoIcon />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "-2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-zinc-50 md:col-span-3"
        >
            <a
                href="https://github.com/bhavy-j"
                className="grid h-full place-content-center text-3xl text-black"
            >
                <GitHubLogoIcon />
            </a>
        </Block>
        <Block
            whileHover={{
                rotate: "2.5deg",
                scale: 1.1,
            }}
            className="col-span-6 bg-blue-500 md:col-span-3"
        >
            <a
                href="#"
                className="grid h-full place-content-center text-3xl text-white"
            >
                <GitHubLogoIcon />
            </a>
        </Block>
    </>
);

const AboutBlock = () => (
    <Block className="col-span-12 text-3xl leading-snug">
        <p>
            My passion is building cool stuff.{" "}
            <span className="text-zinc-400">
                {`I build primarily with React, Tailwind CSS, and Framer Motion. I love
                this stack so much that I even built a website about it. I always want to learn more.`}
            </span>
        </p>
    </Block>
);
