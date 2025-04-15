import { clip, gear, growth, path, security, visitors } from '@/assets/Special'
import React from 'react'

export default function Special() {

    const special = [
        { name: 'الحماية من عمليّات الاختراق والبرامج الخبيثة', desc: 'قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.', image: security },
        { name: 'التخفيف من هجمات DDoS', desc: 'يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.', image: clip },
        { name: 'تحسين أداء الموقع عبر CDN', desc: 'تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.', image: gear },
        { name: 'الحماية من عمليّات الاختراق والبرامج الخبيثة', desc: 'قم بحماية موقعك من البرامج الضارة ومنع محاولات الاختراق وهجمات استغلال الثغرات Zero-Day وهجمات تخمين كلمة المرور Brute Force.', image: growth },
        { name: 'التخفيف من هجمات DDoS', desc: 'يمكن أن تتسبب هجمات حجب الخدمة الموزعة (DDoS) في التوقف التام لعملك. نحن نحظر هجمات DDoS للطبقات 3 و 4 و 7 ومع تأمين معدل نقل البيانات bandwidth أثناء الهجمات.', image: path },
        { name: 'تحسين أداء الموقع عبر CDN', desc: 'تعمل شبكة توصيل المحتوى (CDN) الخاصة بنا على تحسين سرعة تحميل الصفحة وتقليل أحمال الخادم بنسبة 80٪ في المتوسط ​​لتحسين أداء موقعك.', image: visitors },
    ]
    return (
        <div dir="rtl" className='bg-[#FCFCFC] flex flex-col items-center justify-center gap-10 py-20'>
            <h1 className='text-[#2B1F51] text-[30px] md:text-[40px] font-bold text-center'>ما الذي يميزنا</h1>
            <div className='flex flex-wrap w-full justify-center items-center gap-8 px-3'>
                {
                    special.map((item, index) => (
                        <div key={index} className='bg-white shadow-xl rounded-xl max-w-[330px] p-4 flex flex-col gap-3 min-h-[320px] cursor-pointer'>
                            <div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='h-[85px] w-[90px] object-contain'
                            ></div>
                            <div className='px-5 flex flex-col gap-3 my-5'>
                                <h1 className=' font-semibold'>{item.name}</h1>
                                <p className='font-thin'>{item.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
