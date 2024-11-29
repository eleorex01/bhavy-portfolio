

import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { RevealBento } from './RevealGrid';
import TechStack from './TechSection';


const About = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.skills-heading', { duration: 1, opacity: 0, y: -30 })
            .from('.skills-category', { duration: 1, opacity: 0, stagger: 0.02 }, '-=0.5')
            .from('.toolbox-heading', { duration: 1, opacity: 0, y: -30 }, '-=0.5')
            .from('.list-none', { duration: 1, opacity: 0, stagger: 0.01, x: 10 }, '<=')
            .from('.toolbox-item', { duration: 1, opacity: 0, stagger: 0.02, x: 30 }, '-=0.5')
    }, []);

    return (
        <div className="min-h-screen text-white py-10 px-4">
            {/* Skills Section */}
            <div className="max-w-6xl mx-auto grid gap-4">
                <h2 className="text-3xl mb-4">About Me</h2>
                <RevealBento />
                <div className='mt-10'>
                    <TechStack />
                </div>
            </div>
        </div>
    );
};

export default About;
