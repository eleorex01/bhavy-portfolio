"use client";
// CursorFollower.tsx
import { useState, useEffect } from 'react';
import { useCursor } from '../context/cursorContext';

interface Position {
    x: number;
    y: number;
}

export default function CursorFollower(): JSX.Element {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const { cursorStyle } = useCursor();

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <div
                className="absolute rounded-full mix-blend-difference"
                style={{
                    width: `${cursorStyle.size}px`,
                    height: `${cursorStyle.size}px`,
                    backgroundColor: cursorStyle.color,
                    border: `1px solid white`,
                    opacity: 0.5,
                    transform: `translate(${position.x - cursorStyle.size / 2}px, ${position.y - cursorStyle.size / 2}px)`,
                    transition: 'all 400ms ease-out',
                }}
            />
        </div>
    );
}