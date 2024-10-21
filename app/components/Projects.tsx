'use client';
import { useState, useEffect, useRef } from 'react';
import ProjectStyle from "./../style/project.module.css"
import subProjectStyle from "./../style/sub-project.module.css"
import aboutStyle from "./../style/about.module.css"
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import FlipLink from './FlipLinks';

const projects: { title: string; src: string; color: string; }[] = [
    {
        title: "SOL",
        src: "sol.png",
        color: "#000000"
    },
    {
        title: "Office Studio",
        src: "sol.png",
        color: "#8C8C8C"
    },
    {
        title: "Locomotive",
        src: "sol.png",
        color: "#EFE8D3"
    },
    {
        title: "Silencio",
        src: "sol.png",
        color: "#706D63"
    }
]

const scaleAnimation: { initial: { scale: number; x: string; y: string; }; enter: { scale: number; x: string; y: string; transition: { duration: number; ease: number[]; }; }; closed: { scale: number; x: string; y: string; transition: { duration: number; ease: number[]; }; }; } = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

    const [modal, setModal] = useState<{ active: boolean; index: number }>({ active: false, index: 0 })
    const { active, index } = modal;
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);


    type QuickToFunc = (value: number) => void;

    const xMoveContainer = useRef<QuickToFunc | null>(null);
    const yMoveContainer = useRef<QuickToFunc | null>(null);
    const xMoveCursor = useRef<QuickToFunc | null>(null);
    const yMoveCursor = useRef<QuickToFunc | null>(null);
    const xMoveCursorLabel = useRef<QuickToFunc | null>(null);
    const yMoveCursorLabel = useRef<QuickToFunc | null>(null);

    useEffect(() => {
        // Move Container
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
        // Move cursor
        xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
        yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
        // Move cursor label
        xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
        yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
    }, []);

    const moveItems = (x: number, y: number) => {
        xMoveContainer.current?.(x);
        yMoveContainer.current?.(y);
        xMoveCursor.current?.(x);
        yMoveCursor.current?.(y);
        xMoveCursorLabel.current?.(x);
        yMoveCursorLabel.current?.(y);
    };


    const manageModal = (active: boolean, index: number, x: number, y: number) => {
        moveItems(x, y)
        setModal({ active, index })
    }

    return (
        <div>
            <AboutProject />
            <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className={ProjectStyle.projects}>
                <div className={ProjectStyle.body}>
                    {
                        projects.map((project, index) => {
                            return <Project index={index} title={project.title} manageModal={manageModal} key={index} />
                        })
                    }
                </div>
                <motion.button className='py-6 px-8 bg-white text-black rounded-full text-2xl'><FlipLink href="#">More&nbsp;Work</FlipLink></motion.button>
                <>
                    <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={ProjectStyle.modalContainer}>
                        <div style={{ top: index * -100 + "%" }} className={ProjectStyle.modalSlider}>
                            {
                                projects.map((project, index) => {
                                    const { src, color } = project
                                    return <div className={ProjectStyle.modal} style={{ backgroundColor: color }} key={`modal_${index}`}>
                                        <Image
                                            src={`/images/${src}`}
                                            width={300}
                                            height={0}
                                            alt="image"
                                        />
                                    </div>
                                })
                            }
                        </div>
                    </motion.div>
                    <motion.div ref={cursor} className={ProjectStyle.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
                    <motion.div ref={cursorLabel} className={ProjectStyle.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                </>
            </main>
        </div>
    )
}

type ManageModalType = (open: boolean, index: number, x: number, y: number) => void;

function Project({ index, title, manageModal }: { index: number, title: string, manageModal: ManageModalType }) {

    return (
        <div
            onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }}
            onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
            className={subProjectStyle.project}>
            <h2>{title}</h2>
            <p>Web Development</p>
        </div>
    );
}



function AboutProject() {

    const slideUp = {
        initial: {
            y: "100%"
        },
        open: (i: number) => ({
            y: "0%",
            transition: { duration: 0.5, delay: 0.01 * i }
        }),
        closed: {
            y: "100%",
            transition: { duration: 0.5 }
        }
    }

    const opacity = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        closed: {
            opacity: 0,
            transition: { duration: 0.5 }
        }
    }

    const phrase = 'I help businesses elevate their digital presence. Combining cutting-edge technologies like React, Next.js, GSAP, Tailwind CSS, and more, I deliver immersive, responsive websites that captivate audiences.';
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={aboutStyle.description}>
            <div className={`${aboutStyle.body} flex-col xl:flex-row`}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className={aboutStyle.mask}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>My passion for design, coding, and creating interactive experiences positions me uniquely in the world of web development.</motion.p>
                <div>
                    <motion.button className='py-6 px-8 bg-white text-black rounded-full text-2xl'><FlipLink href="#">About&nbsp;Me</FlipLink>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}