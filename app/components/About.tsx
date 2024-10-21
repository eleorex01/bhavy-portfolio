

import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const About = () => {
    useGSAP(() => {
        const tl = gsap.timeline();
        tl.from('.skills-heading', { duration: 1, opacity: 0, y: -30 })
            .from('.skills-category', { duration: 1, opacity: 0, stagger: 0.02, x: -30 }, '-=0.5')
            .from('.toolbox-heading', { duration: 1, opacity: 0, y: -30 }, '-=0.5')
            .from('.toolbox-item', { duration: 1, opacity: 0, stagger: 0.02, x: 30 }, '-=0.5');
    }, []);

    return (
        <div className="min-h-screen  text-white py-10 px-4">
            {/* Skills Section */}
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl mb-4">About Me</h2>
                <p className="text-lg mb-6">
                    I craft digital experiences combining design, motion & development. My creative journey began 15 years ago when I discovered a passion for everything that could be created through a computer. Curious and driven by the desire to learn and practice, I spent countless hours learning graphic and motion design, as well as web development, through online resources and personal projects. All of this naturally led me to continue my studies in this field and then quickly apply my skills in a professional setting.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="skills-category text-3xl mb-4">Product Design</h2>
                        <ul className="list-none space-y-2 text-lg">
                            <li>UX/UI Design</li>
                            <li>Prototyping</li>
                            <li>Design System</li>
                            <li>Developer Handoff</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="skills-category text-3xl mb-4">Brand Design</h2>
                        <ul className="list-none space-y-2 text-lg">
                            <li>Logo Design</li>
                            <li>Brand Guidelines</li>
                            <li>Presentations</li>
                            <li>Digital & Print Assets</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="skills-category text-3xl mb-4">Motion Design</h2>
                        <ul className="list-none space-y-2 text-lg">
                            <li>UI Animations</li>
                            <li>Logo Animations</li>
                            <li>Illustration Animations</li>
                            <li>Explainer Videos</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="skills-category text-3xl mb-4">Web Development</h2>
                        <ul className="list-none space-y-2 text-lg">
                            <li>Front-End Development</li>
                            <li>WordPress Theme</li>
                            <li>SEO</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Toolbox Section */}
            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="toolbox-heading text-3xl mb-10">Toolbox</h2>

                <div className="flex flex-wrap gap-6 text-xl">
                    <span className="toolbox-item">HTML</span>
                    <span className="toolbox-item">CSS</span>
                    <span className="toolbox-item">JS</span>
                    <span className="toolbox-item">WordPress</span>
                    <span className="toolbox-item">Photoshop</span>
                    <span className="toolbox-item">Illustrator</span>
                    <span className="toolbox-item">InDesign</span>
                    <span className="toolbox-item">After Effects</span>
                    <span className="toolbox-item">Premiere Pro</span>
                    <span className="toolbox-item">Figma</span>
                    <span className="toolbox-item">ZeroHeight</span>
                </div>
            </div>
        </div>
    );
};

export default About;
