import Image from 'next/image'
import React, { useRef } from 'react'
import { Space_Grotesk } from "next/font/google";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const space = Space_Grotesk({ subsets: ["latin"] });


const Hero = () => {
    const title = useRef<HTMLDivElement>(null);
    const subtitle = useRef<HTMLDivElement>(null);
    const line = useRef<SVGSVGElement>(null);
    const mainDesc = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        //arrow down animation [continue]
        gsap.from(line.current, {
            y: "10px",
            duration: 2,
            ease: "Power2.easeInOut",
            repeat: -1,
            yoyo: true
        })

        gsap.registerPlugin(ScrollTrigger);
        // Create a timeline
        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top 10%",
                scrub: 2,
            }
        });

        // Shrinking on scroll down and growing on scroll up
        t2.to(".main-img", {
            duration: 0.5,
            scale: 0.85,
            transformOrigin: "center center",
        }).to(".main-img", {
            duration: 0.5,
            scale: 1,
            transformOrigin: "center center",
        });


        //main animation [intially place]
        const tl = gsap.timeline();
        tl.from(".main-img", {
            duration: 0.5,
            scale: 0.1,
            opacity: 0,
            transformOrigin: "center center",
        })
        tl.from(title.current, {
            opacity: 0,
            x: "150px",
            duration: 0.5,
        })
        tl.from(subtitle.current, {
            opacity: 0,
            x: "-150px",
            duration: 0.5,
        }, "<")
        tl.from(".sub-info", {
            opacity: 0,
            y: "-100%",
        })
        tl.from(mainDesc.current, {
            opacity: 0,
            filter: "blur(15px)",
            x: "-10px"
        })
    })

    return (
        <div className='w-full container mx-auto relative' id="hero">
            <div className='w-full flex xl:flex-row flex-col justify-center gap-4 items-center text-yellow-50'>
                <div className='text-right grid gap-6 w-full'>
                    <h2 className='text-3xl xl:text-4xl 2xl:text-6xl text-right font-thin tracking-normal' ref={title}>Bhavy Jogani</h2>
                    <div style={{ fontFamily: space.style.fontFamily }} className='overflow-hidden sub-info'>
                        <h5>Based in Ahemdabad, India</h5>
                        <div className='flex gap-2 items-center justify-end'>
                            <span className='w-[10px] h-[10px] bg-green-400 rounded-full inline-block available-anim'></span>
                            <span>Available for a full-time position</span>
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <Image src="/images/bhavy01.jpg" alt="hero" width={700} height={700} className="main-img object-cover sm:max-w-[300px] sm:max-h-[300px] md:max-w-[500px] md:max-h-[500px] xl:max-w-[600px] xl:max-h-[600px]  2xl:max-w-[700px] 2xl:max-h-[700px]"
                        priority />
                    <svg className='absolute top-[3%] left-[9%] animate-[spin_5s_linear_infinite] z-[-1]' width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_103_9)"> <path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="url(#paint0_linear_103_9)"/> </g> <defs> <linearGradient id="paint0_linear_103_9" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#DF99F7"/> <stop offset="1" stop-color="#FFDBB0"/> </linearGradient> <clipPath id="clip0_103_9"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
                </div>
                <h2 className='text-3xl xl:text-4xl 2xl:text-6xl text-left font-thin w-full' ref={subtitle}>
                    Full Stack <br /> Web Developer
                </h2>
            </div>
            <div className='w-full h-[80px]'>
                <svg ref={line} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-down mx-auto w-[30px] h-full"><path d="M8 18L12 22L16 18" /><path d="M12 2V22" /></svg>
            </div>
            <div style={{ fontFamily: space.style.fontFamily }} className='max-w-[90%] mx-auto text-xl lg:text-5xl m-12 tracking-normal lg:leading-[3.5rem]' ref={mainDesc}>
                <div className='w-[20%] inline-block'></div>
                {`I'm a full-stack web developer with over 3 years of experience in the industry. I specialize in creating dynamic and responsive web applications, delivering seamless front-end experiences with modern JavaScript frameworks, and building robust back-end solutions. I'm passionate about learning new technologies and continuously improving my skills to craft high-quality, scalable solutions for clients.`}
            </div>
        </div>
    )
}

export default Hero


