'use client'
import { LogIn, Logs } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import NavMenu from './NavMenu'

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const Links = [
        { name: "Demos", link: "#" },
        { name: "Hosting", link: "#" },
        { name: "ProHosting", link: "#" },
        { name: "Domains", link: "#" },
        { name: "Need Help?", link: "#" },
        { name: "Pages", link: "#" },
        { name: "Contact Us", link: "#" },
    ]

    return (
        <>
            <div className='fixed top-0 flex justify-between items-center w-full h-[85px] bg-white font-cairo px-2 md:p-[15px] lg:p-[29px] z-40'>
                <div className='flex items-center gap-[10px] md:gap-[10px] lg:gap-[40px]'>
                    <h1 className='text-[30px] md:text-[35px] lg:text-[40px] font-semibold cursor-pointer'>Logo</h1>
                    <div className='hidden md:flex items-center gap-1 cursor-pointer'>
                        <div className='w-4 h-4 rounded-full bg-[#D9D9D9]'></div>
                        <p>EN</p>
                    </div>
                </div>
                <div className='flex items-center gap-8'>
                    <div className='hidden md:flex items-center gap-3 lg:gap-5'>
                        {Links.map((item, index) => (
                            <Link key={index} href={item.link} className='hover:text-gray-700 hover:underline underline-offset-4 transition-all duration-100 ease-in-out font-semibold text-[14px] lg:text-base'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Link href='#' className='flex justify-center items-center gap-3 rounded-2xl bg-[#2B1F51] hover:bg-[#2c2542] text-white py-[11px] px-[15px]'>
                        <p>client login</p>
                        <LogIn size={18} />
                    </Link>
                    <div className='md:hidden cursor-pointer'>
                        <Logs size={25} onClick={() => setNav(true)} />
                    </div>
                </div>
            </div>
            {nav && <NavMenu setNav={setNav} />}
        </>
    )
}
