"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dancing_Script } from "next/font/google";
import { animateText } from "@/utils/animation";
import React from "react";
const dancingScript = Dancing_Script({ weight: "400", subsets: ["latin"] });

const PreLoader = () => {

    const overlayDiv = useRef<HTMLDivElement>(null);
    const overlayDiv2 = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        animateText();
        const t1 = gsap.timeline({});
        t1.set("#title", { opacity: 1 })
            .set("#logo > svg", { opacity: 1 })
            .set("#subtitle", { opacity: 1 })
            .set("#name", { opacity: 1 })
            .set("#desc", { opacity: 1 })
        t1.from("#title > span", {
            x: "150px",
            ease: "Power3.easeInOut",
            duration: 0.8,
        })
            .from("#subtitle > span", {
                x: "150px",
                ease: "Power3.easeInOut",
                delay: -0.7,
            })
            .from("#name > span", {
                stagger: 0.02,
                y: "100%",
                delay: -0.4,
            })
            .from("#logo", {
                opacity: 0,
                scale: 0.1,
                rotate: 360,
                x: "-100%",
                delay: -0.3,
            })
            .from("#desc > span", {
                y: "-120%",
                delay: -0.2,
            })
            .to(".child > span", {
                y: "-120%",
                duration: 1,
                delay: 1,
            })
            .to(overlayDiv.current, {
                height: 0,
                duration: 1.5,
                delay: -0.4,
                ease: "Power3.easeInOut",
            })
            .to("#logo", {
                rotate: 360,
                scale: 25,
                duration: 2,
                delay: -2,
            })
            .to(overlayDiv2.current, {
                height: 0,
                duration: 1.5,
                delay: -1.2,
                ease: "Power3.easeInOut",
            });
    }, [overlayDiv]);

    return (
        <>
            <div
                className="bg-white w-full h-screen absolute top-0 left-0 z-[9999] text-black overflow-hidden"
                ref={overlayDiv}
            >
                <div className="flex items-center flex-col justify-center text-xl font-light w-full h-[100px] overflow-hidden">
                    <h4 id="title" className="animation-text child overflow-hidden opacity-0">
                        My Portfolio
                    </h4>
                    <p id="subtitle" className="animation-text child overflow-hidden opacity-0">
                        @2024
                    </p>
                </div>
                <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center overflow-hidden">
                    <h1
                        id="name"
                        className="text-6xl font-[500] uppercase tracking-tight animation-text child overflow-hidden opacity-0"
                    >
                        Bhavy &nbsp; Jogani
                    </h1>
                    <div
                        id="logo"
                        className="flex justify-center items-center m-4"
                    >
                        <svg
                            width="85"
                            height="85"
                            className="opacity-0"
                            viewBox="0 0 200 200"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_116_153)">
                                <path
                                    d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                                    fill="url(#paint0_linear_116_153)"
                                />
                            </g>
                            <defs>
                                <linearGradient
                                    id="paint0_linear_116_153"
                                    x1="100"
                                    y1="0"
                                    x2="100"
                                    y2="200"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#DF99F7" />
                                    <stop offset="1" stopColor="#FFDBB0" />
                                </linearGradient>
                                <clipPath id="clip0_116_153">
                                    <rect width="200" height="200" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h4
                        id="desc"
                        className="text-5xl font-[300] italic animation-text child overflow-hidden opacity-0"
                        style={{ fontFamily: dancingScript.style.fontFamily }}
                    >
                        Creative &nbsp; web &nbsp; developer
                    </h4>
                </div>
            </div>
            <div
                className="bg-[#D2FF72] w-full h-screen absolute top-0 left-0 z-[8888]"
                ref={overlayDiv2}
            ></div>
        </>
    );
};

export default PreLoader;

