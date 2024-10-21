"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isAnimating, setIsAnimating] = useState(true);
    useGSAP(() => {
        gsap.to("#animWrapper > div", {
            height: 0,
            stagger: 0.06,
            ease: "Power3.easeInOut",
            onComplete: () => setIsAnimating(false)
        })
    },{ scope: "#animWrapper" })

    return (
        <>
            {isAnimating && <div className="absolute h-screen w-full flex" id="animWrapper">
                <div className="bg-green-100 w-full h-full"></div>
                <div className="bg-green-200 w-full h-full"></div>
                <div className="bg-green-300 w-full h-full"></div>
                <div className="bg-green-400 w-full h-full"></div>
                <div className="bg-green-500 w-full h-full"></div>
            </div>}
            {!isAnimating &&
                <>
                    <Navbar /> 
                    {children}
                    <Footer />
                </>
            }
        </>
    );
}
