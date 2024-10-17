"use client";

import { animateText } from '@/utils/animation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { useCursor } from '../context/cursorContext';
import FlipLink from './FlipLinks';

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
        <nav className='h-[80px] w-full flex justify-between items-center container mx-auto z-[999]' id='nav'>
            <h2 className='uppercase text-2xl md:text-4xl font-extrabold animation-text nav-text overflow-hidden'>Bhavy&nbsp;J.</h2>
            <ul className='flex gap-6' id='nav-links'>
                <li onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="/">Home</FlipLink></li>
                <li onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="work">Work</FlipLink></li>
                <li onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="">About</FlipLink></li>
            </ul>
        </nav>
    )
}

export default Navbar