'use client'
import { mail, paas, server } from '@/assets/Services'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Services() {
    const [select, SetSelect] = useState(0)
    const servicesTap = [
        { name: "خدمات سحابية" },
        { name: "نطاقات" },
        { name: "التصميم والتطوير" },
    ]

    const services = [
        { name: 'الاستضافة السحابية المشتركة', desc: 'استضف موقعك بسهولة وأريحيّة وبتكلفة اقتصادية! مع الاستضافة السحابية المشتركة.', image: server },
        { name: 'LS Suite', desc: 'بريد إلكتروني احترافي وتخزين عبر الإنترنت واجتماعات مشتركة والمزيد. بنيت للعمل.', image: mail },
        { name: 'JPaaS المنصة كخدمة', desc: 'PaaS المُدارة مع عمليات DevOps المؤتمتة. تسعير الدفع حسب الاستخدام.', image: paas },
    ]

    return (
        <div dir="rtl" className='bg-[#FCFCFC] flex flex-col items-center justify-center gap-10 py-20'>
            <h1 className='text-[#2B1F51] text-[30px] md:text-[40px] font-bold text-center'>خدمات كبيرة تلبي احتياجات عملك</h1>
            <p className='text-center max-w-3xl px-2'>من خلال منتجاتنا وخدماتنا السحابية، ستجد بأننا نلبي 100٪ من احتياجات عملك والبيانات، مع أمان فائق للبنية التحتية الخاصة بك.</p>
            <div dir="rtl" className='flex items-center gap-5 bg-[#F6F6F6] rounded-md p-1'>
                {
                    servicesTap.map((item, index) => (
                        <div key={index} className={`${select === index ? "bg-white" : "bg-transparent"} flex items-center justify-center w-[60px] md:w-[117px] h-[37px] rounded-md cursor-pointer min-w-max px-2`} onClick={() => SetSelect(index)}>{item.name}</div>
                    ))
                }
            </div>
            <div className='flex flex-wrap w-full justify-center items-center gap-8 px-3'>
                {
                    services.map((item, index) => (
                        <div key={index} className='bg-white shadow-xl rounded-xl max-w-[330px] p-4 flex flex-col gap-3 '>
                            <div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='h-[90px] w-[90px] object-contain'
                            ></div>
                            <div className='px-5 flex flex-col gap-3 my-5'>
                                <h1 className=' font-semibold'>{item.name}</h1>
                                <p className='font-thin'>{item.desc}</p>
                                <Link href={'#'} className='hover:underline underline-offset-4'>اعرف المزيد</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
