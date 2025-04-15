'use client'
import { Aske, pages } from '@/assets/Asked'
import { Minus, Plus } from 'lucide-react'
import React, { useState } from 'react'

export default function Asked() {
    const [tap, setTap] = useState(0)
    const [ques, setQues] = useState(0)
    const taps = [
        { name: 'الأسئلة الشائعة', image: Aske },
        { name: 'مركز المساعدة', image: pages },
    ]

    const questions = [
        { ques: 'ما هو المُخدّم الافتراضي المخصص (VPS)؟', answer: 'المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.' },
        { ques: 'متى يجب علي استخدام استضافة VPS بدلًا من الاستضافة المشتركة؟', answer: 'المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.' },
        { ques: 'ما الفرق بين المُخدّم الافتراضي والمُخدّم المخصص؟', answer: 'المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.' },
        { ques: 'ماهي المواقع المتاحة لاستضافة VPS؟', answer: 'المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.' },
    ]
    return (
        <div dir="rtl" className='flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 w-full px-7 md:px-20 bg-[#FCFCFC] py-10'>
            <div className='flex flex-row md:flex-col items-center gap-5 md:gap-8 w-full md:w-auto'>
                {
                    taps.map((item, index) => (
                        <div key={index} className='w-full h-full min-w-[150px] min-h-[150px]  md:min-w-[240px] md:min-h-[240px] bg-white rounded-xl flex flex-col items-center justify-center gap-2 md:gap-3 relative md:shadow-xl cursor-pointer z-10' onClick={() => setTap(index)}>
                            <div
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundPosition: "center center",
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='h-[100px] w-[100px] md:h-[150px] md:w-[150px]'
                            >
                            </div>
                            <h1 className='text-[18px] md:text-[20px] font-medium text-center'>{item.name}</h1>
                            {tap === index && (
                                <div className='w-3/4 h-1 bg-[#1B69FF] absolute bottom-0'></div>
                            )}
                        </div>
                    ))
                }
            </div>
            <div className='w-full md:w-3/4 min-h-[74vh] bg-white flex flex-col justify-between gap-3 px-3 py-16 transition-all duration-500 ease-in-out rounded-xl md:shadow-xl'>
                {questions.map((item, index) => (
                    <div key={index} className='flex flex-row items-center justify-between cursor-pointer gap-5 transition-all duration-500 ease-in-out' onClick={() => setQues(index)}>
                        <div className='flex flex-col gap-2'>
                            <h1>{item.ques}</h1>
                            {ques === index && (
                                <p className='transition-all duration-500 ease-in-out font-thin'>{item.answer}</p>
                            )
                            }
                        </div>
                        {ques === index ? (<Minus className='font-black w-10 h-10' />) : (<Plus size={20} />)}
                    </div>
                ))}
            </div>
        </div>
    )
}
