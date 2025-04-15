import Link from 'next/link'
import React from 'react'

export default function HeroContent() {
    return (
        <div className='flex flex-col md:justify-center items-center gap-5 w-full'>
            <h1 className='text-[30px] md:text-[40px] font-bold'>مركز البيانات</h1>
            <p className='text-center max-w-3xl font-thin'>كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات المشتركة كلام و وصف للاستضافات  كلام و   المشتركة كلام و وصف للاستضافات المشتركة </p>
            <div className='flex justify-center items-center gap-[25px]'>
                <Link href={'#'} className='text-center rounded-xl bg-white hover:bg-[#fafafa] text-[#092346] py-2 w-[106px] font-semibold transition-all duration-100 ease-in-out'>
                    انشاء حساب
                </Link>
                <Link href={'#'} className='text-center rounded-xl text-white bg-transparent hover:bg-white hover:text-[#092346] py-1.5 w-[106px] border-2 border-white font-semibold transition-all duration-100 ease-in-out'>
                    عرض الاسعار
                </Link>
            </div>
        </div>
    )
}
