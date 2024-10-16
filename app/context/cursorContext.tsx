"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CursorStyle {
    size: number;
    color: string;
}

interface CursorContextType {
    cursorStyle: CursorStyle;
    updateCursorStyle: (newStyle: Partial<CursorStyle>) => void;
    resetCursorStyle: () => void;
}

const defaultCursorStyle: CursorStyle = {
    size: 32,
    color: 'transparent', 
};

const CursorContext = createContext<unknown>(null);

interface CursorProviderProps {
    children: ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
    const [cursorStyle, setCursorStyle] = useState<CursorStyle>(defaultCursorStyle);

    const updateCursorStyle = (newStyle: Partial<CursorStyle>) => {
        setCursorStyle(prev => ({ ...prev, ...newStyle }));
    };

    const resetCursorStyle = () => {
        setCursorStyle(defaultCursorStyle);
    };

    return (
        <CursorContext.Provider value={{ cursorStyle, updateCursorStyle, resetCursorStyle }}>
            {children}
        </CursorContext.Provider>
    );
}

export function useCursor(): CursorContextType {
    const context = useContext(CursorContext);
    if (context === undefined) {
        throw new Error('useCursor must be used within a CursorProvider');
    }
    return context as CursorContextType;
}