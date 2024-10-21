"use client";

import { animateText } from '@/utils/animation';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react'
import { useCursor } from '../context/cursorContext';
import FlipLink from './FlipLinks';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const { updateCursorStyle, resetCursorStyle } = useCursor();
    const pathname = usePathname()
    const [active, setActive] = useState(pathname);

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    useGSAP(() => {
        animateText();

        const tl = gsap.timeline();
        tl.from(".nav-text > span", {
            opacity: 0,
            y: "100%",
            duration: 0.2,
            stagger: 0.02,
        })
        tl.from("#nav-links > li", {
            opacity: 0,
            y: "100%",
            duration: 0.2,
            stagger: 0.02,
        }, "<")
    })

    const activeStyle = {
        opacity: 1,
        transform: 'scale(1.05)',
        color : "#98fe7f",
        transition: 'opacity 0.3s, transform 0.3s',
    };

    const inactiveStyle = {
        opacity: 0.7,
        transform: 'scale(1)',
        transition: 'opacity 0.3s, transform 0.3s',
    };

    return (
        <nav className='h-[80px] w-full flex justify-between items-center container mx-auto z-[999]' id='nav'>
            <h2 className='uppercase text-2xl md:text-4xl font-extrabold animation-text nav-text overflow-hidden'>Bhavy&nbsp;J.</h2>
            <ul className='flex gap-6' id='nav-links'>
                <li style={active === "/" ? activeStyle : inactiveStyle} onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="/">Home</FlipLink></li>
                <li style={active === "/work" ? activeStyle : inactiveStyle} onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="work">Work</FlipLink></li>
                <li style={active === "/about" ? activeStyle : inactiveStyle} onMouseEnter={() => updateCursorStyle({ size: 75 })} onMouseLeave={() => resetCursorStyle()}><FlipLink href="about">About</FlipLink></li>
            </ul>
        </nav>
    )
}

export default Navbar