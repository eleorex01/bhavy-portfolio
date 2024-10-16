"use client";

import { animateText } from '@/utils/animation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useCursor } from '../context/cursorContext';
import Link from 'next/link';

const Navbar = () => {
    const { updateCursorStyle, resetCursorStyle } = useCursor();

    useGSAP(() => {
        animateText();

        const tl = gsap.timeline();
        tl.from(".nav-text > span", {
            opacity: 0,
            y: "100%",
            duration: 0.8,
            stagger: 0.04
        })
        tl.from("#nav-links > li", {
            opacity: 0,
            y: "100%",
            duration: 0.8,
            stagger: 0.04
        }, "<")
    })

    return (
        <nav className='h-[80px] w-full flex justify-between items-center container mx-auto z-[9999]' id='nav'>
            <h2 className='uppercase text-xl md:text-3xl text-red-200 font-extrabold animation-text nav-text overflow-hidden'>Bhavy&nbsp;J.</h2>
            <div>
                <ul className='flex gap-8 text-xl overflow-hidden' id='nav-links'>
                    <li className='hover:text-red-200 transition-colors duration-500' onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><Link href="">Home</Link></li>
                    <li className='hover:text-red-200 transition-colors duration-500' onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><Link href="work">Work</Link></li>
                    <li className='hover:text-red-200 transition-colors duration-500' onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><Link href="">About</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar