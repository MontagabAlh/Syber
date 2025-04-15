import { America, British, Emirates, Finland, Germany, Italy, Korea, Saudi, Sudan, Turkey } from '@/assets/Flags'
import React from 'react'

export default function Countries() {
    const countries = [
        { name: 'امريكا', flag: America, state: true },
        { name: 'بريطانيا', flag: British, state: true },
        { name: 'تركيا', flag: Turkey, state: true },
        { name: 'الامارات', flag: Emirates, state: true },
        { name: 'السعودية', flag: Saudi, state: true },
        { name: 'كوريا', flag: Korea, state: true },
        { name: 'ايطاليا', flag: Italy, state: true },
        { name: 'فنلند', flag: Finland, state: true },
        { name: 'المانيا', flag: Germany, state: true },
        { name: 'السودان', flag: Sudan, state: false },
    ]
    return (
        <div className='flex flex-wrap justify-center items-center px-5 md:px-24 gap-5 mt-10'>
            {
                countries.map((item, index) => (
                    <div key={index} className='flex justify-between items-center rounded-xl bg-white shadow-2xl w-[270px] p-3 cursor-pointer'>
                        <div
                            style={{
                                backgroundImage: `url(${item.flag})`,
                                backgroundPosition: "center bottom",
                                backgroundSize: "cover",
                                backgroundRepeat: 'no-repeat',
                            }}
                            className='h-[65px] w-[65px] rounded-full'
                        ></div>
                        <div dir="rtl">
                            <h1 className='text-xl font-bold'>{item.name}</h1>
                            <div className='flex items-center'>
                                {item.state ? (
                                    <div className='flex items-center gap-1'>
                                        <p className='text-[12px]'>الاستجابة:</p>
                                        <p className='text-green-500 text-[12px]'>20ms</p>
                                        <div className='w-2 h-2 bg-green-500 rounded-full text-[12px]'></div>
                                    </div>
                                ) : (
                                    <p className='text-[12px]'>قريباً</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
