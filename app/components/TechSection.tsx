"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import Image from "next/image";
import { motion } from "framer-motion";

const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export default function TechStack() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);
    const div8Ref = useRef<HTMLDivElement>(null);
    const div9Ref = useRef<HTMLDivElement>(null);
    const div10Ref = useRef<HTMLDivElement>(null);
    const div11Ref = useRef<HTMLDivElement>(null);
    const div12Ref = useRef<HTMLDivElement>(null);
    const div13Ref = useRef<HTMLDivElement>(null);

    return (
        <div
            className="container mx-auto relative flex h-[800px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
            ref={containerRef}
        >
            <div className="flex size-full flex-col max-w-3xl max-h-[500px] items-stretch justify-between gap-10">
                <div className="flex flex-row items-center justify-around">
                    <div ref={div1Ref}>
                        <Image src="/images/angular.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                    <div ref={div2Ref}>
                        <Image src="/images/laravel.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div ref={div3Ref}>
                        <Image src="/images/react.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                    <div ref={div5Ref}>
                        <Image src="/images/nodejs.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-around">
                    <Circle ref={div6Ref}>
                        <Image src="/images/nextjs.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </Circle>
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} ref={div4Ref} className="z-[99] rounded-full overflow-hidden">
                        <Image src={`/images/spider.jpg`} alt="logo" width={200} height={200} />
                    </motion.div>
                    <div ref={div7Ref}>
                        <Image src="/images/gsap.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div ref={div8Ref}>
                        <Image src="/images/typescript.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                    <div ref={div9Ref}>
                        <Image src="/images/javascript.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-around">
                    <div ref={div10Ref}>
                        <Image src="/images/wordpress.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                    <div ref={div11Ref}>
                        <Image src="/images/ci.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div ref={div12Ref}>
                        <Image src="/images/framer.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                    <div ref={div13Ref}>
                        <Image src="/images/aws.svg" alt="logo" width={200} height={200} className="size-12"></Image>
                    </div>
                </div>
            </div>

            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div4Ref}

            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div4Ref}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div3Ref}
                toRef={div4Ref}
                curvature={45}
                endYOffset={10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div5Ref}
                toRef={div4Ref}
                curvature={45}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div6Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div7Ref}
                toRef={div4Ref}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div8Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div9Ref}
                toRef={div4Ref}
                curvature={-75}
                endYOffset={-10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div10Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div11Ref}
                toRef={div4Ref}
                curvature={75}
                endYOffset={10}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div12Ref}
                toRef={div4Ref}
                curvature={-95}
                endYOffset={-20}
                reverse
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={div13Ref}
                toRef={div4Ref}
                curvature={-95}
                endYOffset={-20}
                reverse
            />
        </div>
    );
}
