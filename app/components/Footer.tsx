import React from 'react'

const Footer = () => {
    return (
        <div className='h-[80px] w-full flex justify-between items-center container mx-auto' id='nav'>
            <div>©2024 Bhavy J.</div>
            <div className='flex gap-2 items-center'>
                <span className='w-[10px] h-[10px] bg-green-400 rounded-full inline-block available-anim'></span>
                <span>Available for a full-time position</span>
            </div>
            <div>Made with ❤️</div>
        </div>
    )
}

export default Footer