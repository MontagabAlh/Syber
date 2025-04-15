import { X } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface ChildProps {
    setNav: React.Dispatch<React.SetStateAction<boolean>>;
};


export default function NavMenu({ setNav }: ChildProps) {
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
        <div className='w-full h-[100vh] z-50 p-5 bg-white fixed top-0 left-0  flex md:hidden flex-col justify-start gap-5 transition-all duration-500 ease-in-out'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-[30px] font-semibold cursor-pointer' onClick={() => setNav(false)}>Logo</h1>
                    <div className='flex items-center gap-1'>
                        <div className='w-4 h-4 rounded-full bg-[#D9D9D9]'></div>
                        <p>EN</p>
                    </div>
                </div>
                <X size={25} onClick={() => setNav(false)} className='cursor-pointer' />
            </div>
            <div className='flex flex-col gap-5'>
                {
                    Links.map((item, index) => (
                        <Link key={index} href={item.link} className='text-[20px] font-semibold text-start w-full hover:bg-gray-300 rounded-md p-2' onClick={() => setNav(false)}>{item.name}</Link>
                    ))
                }
            </div>
        </div>
    )
}
