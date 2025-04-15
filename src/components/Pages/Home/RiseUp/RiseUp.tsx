'use client'
import { Emirates, EmiratesFlag, RiseUpBG, Saudi, SaudiFlag, Sudan, SudanFlag } from '@/assets/images'
import React, { useState } from 'react'

export default function RiseUp() {
    const Location = [
        { name: "امريكا" },
        { name: "اسيا" },
        { name: "اروبا" },
        { name: "افريقيا" }
    ]

    const Serves = [
        { name: 'دبي', contry: 'الإمارات', image: Emirates, flag: EmiratesFlag },
        { name: 'الخرطوم', contry: 'السودان', image: Sudan, flag: SudanFlag },
        { name: 'الرياض', contry: 'السعودية', image: Saudi, flag: SaudiFlag },
    ]
    const [select, SetSelect] = useState(3)
    return (
        <div
            style={{
                backgroundImage: `url(${RiseUpBG})`,
                backgroundPosition: "center bottom",
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
            }}
            className='bg-[#FCFCFC] flex flex-col items-center justify-center gap-10 py-20'>
            <h1 className='text-[#2B1F51] text-[30px] md:text-[40px] font-bold'>ارتقي عالمياً ومحلياً</h1>
            <div className='flex items-center gap-5 bg-[#F6F6F6] rounded-md p-1'>
                {
                    Location.map((item, index) => (
                        <div key={index} className={`${select === index ? "bg-white" : "bg-transparent"} flex items-center justify-center w-[60px] md:w-[117px] h-[37px] rounded-md cursor-pointer`} onClick={() => SetSelect(index)}>{item.name}</div>
                    ))
                }
            </div>
            <div className='flex flex-wrap w-full justify-center items-center gap-8 px-3'>
                {Serves.map((item, index) => (
                    <div key={index} className='bg-white shadow-xl rounded-xl w-[280px] '>
                        <div
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: "cover",
                                backgroundRepeat: 'no-repeat',
                            }}
                            className='h-[160px] w-auto mt-2'
                        ></div>
                        <div className='px-5 flex flex-col gap-3 my-5'>
                            <div dir="rtl" className='flex items-center justify-start gap-3'>
                                <div
                                    style={{
                                        backgroundImage: `url(${item.flag})`,
                                        backgroundPosition: "center bottom",
                                        backgroundSize: "cover",
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                    className='h-[44px] w-[44px] rounded-full'
                                ></div>
                                <div>
                                    <h1 className='text-[14px] font-medium'>{item.name}</h1>
                                    <p  className='text-[10px] font-medium text-gray-800'>{item.contry}</p>
                                </div>
                            </div>
                            <p className='text-[14px]'>ip: <span className='text-gray-800'>192.168.1.10</span></p>
                            <div className='bg-[#2B1F51] rounded-lg flex items-center justify-center py-2 px-5 text-white cursor-pointer'>
                            إختبار السرعة
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
