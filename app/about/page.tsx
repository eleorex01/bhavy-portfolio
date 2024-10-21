"use client";

import React from 'react'
import Contact from '../components/Contact'
import About from '../components/About'

const Page = () => {
    return (
        <div className='min-h-screen grid gap-[100px]'>
            <About />
            <Contact />
        </div>
    )
}

export default Page