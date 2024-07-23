import React from 'react'

export default function Header(){
    return (
        <div className='bg-gradient-to-r from-[#672280] to-[#A626D3] flex flex-row justify-between py-5 px-10'>
           <div className='flex flex-row gap-2'> <img src="./assets/troll.png" className='w-[31px] h-[26px]' alt="" />
            <p className='text-xl font-semibold text-white'>Meme Generator</p></div>
            <p className='text-white font-light text-sm my-auto'>React Course - Project 3</p>
        </div>
    )
}