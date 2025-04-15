import { cloud, control, grop, lock, privacy, ssl } from '@/assets/Advantages'
import React from 'react'

export default function Advantages() {
    const advantages = [
        { name: 'كشف وإزالة البرمجيّات الخبيثة', image: privacy },
        { name: 'التخفيف من هجمات DDoS', image: cloud },
        { name: 'العمل عبر منصات متعددة', image: control },
        { name: 'تحسين الأداء', image: grop },
        { name: 'المراقبة الأمنية', image: lock },
        { name: 'شهادة الحماية SSL', image: ssl },
    ]
    return (
        <div dir="rtl" className='bg-[#FCFCFC] flex flex-col items-center justify-center gap-10 py-20'>
            <h1 className='text-[#2B1F51] text-[30px] md:text-[40px] font-bold text-center'>مزايا رئيسية</h1>
            <p className='text-center max-w-3xl px-2'>قم بامتلاك مُخدّمك المخصص مع نظام التشغيل المفضل لديك والتطبيقات المثبتة مسبقًا.</p>
            <div className='flex flex-wrap w-full justify-center items-center gap-8 px-5 md:px-20'>
                {
                    advantages.map((item, index) => (
                        <div key={index} className='bg-white shadow-xl rounded-xl min-w-[300px] p-4 flex flex-col justify-center items-center gap-3 min-h-[220px] cursor-pointer'>
                            <div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='h-[110px] w-[100px] object-contain'
                            ></div>
                            <div className='px-5 flex flex-col gap-3 my-5'>
                                <h1 className=' font-semibold'>{item.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
