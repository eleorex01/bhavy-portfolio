import React from 'react'
import { useCursor } from '../context/cursorContext';
import { useGSAP } from '@gsap/react';
import { animateText } from '@/utils/animation';
import gsap from 'gsap';

const Contact = () => {
    const { updateCursorStyle, resetCursorStyle } = useCursor();

    useGSAP(() => {
        animateText();

        gsap.from(".svg-contact", {
            rotate: 360,
            duration: 10,
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%",
                scrub: 5,
            }
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%",
            },
        });
        tl.from("#contact", {
            scale: 1.2,
            filter: "blur(5px)",
            ease: "power3.inOut",
            duration: 0.5,
            transformOrigin: "center center",
        })
        tl.from('#email > span',
            {
                y: 100, ease: "power1.inOut", stagger: 0.02,
            }, "<")
    })


    return (
        <div className='container mx-auto w-auto h-auto border border-slate-700 p-[10rem] rounded-[50px] grid gap-16' id='contact'>
            <div className='grid gap-6 justify-items-center relative'>
                <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Don&apos;t Be Shy, Say Hi!</h3>
                <h2 onMouseEnter={() => updateCursorStyle({ size: 180 })} onMouseLeave={resetCursorStyle} className='text-2xl md:text-3xl lg:text-5xl xl:text-7xl hover:text-red-400 transition-colors duration-500 overflow-y-hidden h-[50px] lg:h-[80px] xl:h-[110px]' ><a href="mailto:bhavyjogani123@gmail.com" className='animation-text' id='email'>bhavyjogani123@gmail.com</a></h2>
            </div>
            <div className='flex gap-8 justify-center items-center w-full'>
                <div className='flex gap-4 items-center'>
                    <span className='w-3 h-3 rounded-full bg-red-400'></span>
                    <a onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()} className='text-xl hover:text-red-400 transition-colors duration-500 leading-none' href="https://www.linkedin.com/in/bhavy-jogani" target='_blank'>LinkedIn</a>
                </div>
                <div className='flex gap-4 items-center'>
                    <span className='w-3 h-3 rounded-full bg-red-400'></span>
                    <a onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()} className='text-xl hover:text-red-400 transition-colors duration-500' href="https://drive.google.com/file/d/1wfqbBZchjtWoD3--aUEdddmZZ9MjlaFS/view?usp=sharing" target='_blank'>Download CV</a>
                </div>
            </div>

            <svg className='absolute top-[-10%] left-[-3%] z-[-1] svg-contact' width="120" height="120" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M184.977 80.047C175.962 89.6912 161.187 97.0302 146.171 100C161.187 102.97 175.962 110.309 184.976 119.953L195.21 130.902L180.495 133.744C167.533 136.247 151.266 133.5 137.372 127.076C147.774 138.306 155.414 152.927 157.039 166.028L158.883 180.901L145.308 174.552C133.35 168.959 121.805 157.174 114.34 143.81C116.155 159.009 113.742 175.329 107.355 186.883L100.105 200L92.8549 186.883C86.4684 175.329 84.0549 159.009 85.8707 143.81C78.4056 157.174 66.8605 168.958 54.9023 174.552L41.327 180.901L43.1712 166.028C44.7958 152.927 52.4358 138.306 62.8386 127.076C48.9442 133.5 32.6772 136.248 19.7153 133.744L5 130.902L15.2344 119.953C24.2493 110.308 39.0247 102.97 54.0409 100C39.0242 97.0298 24.2493 89.6912 15.2344 80.047L5 69.0981L19.7153 66.2558C32.6772 63.7526 48.9447 66.5 62.8386 72.9237C52.4358 61.6944 44.7958 47.0726 43.1712 33.9716L41.327 19.0981L54.9028 25.4484C66.8609 31.0414 78.4061 42.826 85.8712 56.1898C84.0554 40.9907 86.4688 24.6707 92.8553 13.1167L100.106 0L107.356 13.1167C113.743 24.6707 116.156 40.9907 114.34 56.1898C121.806 42.826 133.351 31.0419 145.309 25.4484L158.885 19.0981L157.04 33.9716C155.416 47.0726 147.776 61.6944 137.373 72.9237C151.267 66.5 167.534 63.7521 180.496 66.2558L195.212 69.0981L184.977 80.047ZM81.2543 118.696C91.5325 128.974 108.197 128.974 118.475 118.696C128.753 108.418 128.753 91.7533 118.475 81.4751C108.197 71.1969 91.5325 71.1969 81.2543 81.4751C70.9761 91.7533 70.9761 108.418 81.2543 118.696Z" fill="url(#paint0_linear_116_134)" /> <defs> <linearGradient id="paint0_linear_116_134" x1="100.106" y1="0" x2="100.106" y2="200" gradientUnits="userSpaceOnUse"> <stop stopColor="#A7B5FF" /> <stop offset="1" stopColor="#F3ACFF" /> </linearGradient> </defs> </svg>
        </div>
    )
}

export default Contact