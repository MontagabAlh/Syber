import { HeroBG, HeroBGMobile } from '@/assets/images'
import React from 'react'
import HeroContent from './HeroContent'

export default function Hero() {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${HeroBG})`,
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                }}
                className='hidden md:block bg-gradient-to-l from-[#0c2444] via-[#102444] to-[#0c2444] w-full h-screen text-white pt-[160px]'>
                <HeroContent />
            </div>
            <div
                style={{
                    backgroundImage: `url(${HeroBGMobile})`,
                    backgroundPosition: "center bottom",
                    backgroundSize: "cover",
                    backgroundRepeat: 'no-repeat',
                }}
                className='md:hidden bg-gradient-to-l from-[#0c2444] via-[#102444] to-[#0c2444] w-full h-screen text-white pt-[300px]'>
                <HeroContent />
            </div>
        </div>
    )
}
