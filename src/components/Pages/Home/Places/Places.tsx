import { PlacesBG } from '@/assets/images'
import React from 'react'
import Countries from './Countries'

export default function Places() {
    return (
        <div className='bg-[#FCFCFC] w-full py-20 flex flex-col items-center justify-center'>
            <h1 className='text-[#2B1F51] text-[30px] md:text-[40px] font-bold w-full text-center mb-10'>أماكن سيرفراتنا</h1>
            <div
            style={{
                backgroundImage: `url(${PlacesBG})`,
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
            }}
            className='w-full max-w-[1000px] h-[200px] md:h-[400px] xxl:h-[700px] cursor-pointer'
            ></div>
            <Countries/>
        </div>
    )
}
