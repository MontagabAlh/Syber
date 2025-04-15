import Advantages from '@/components/Pages/Home/Advantages/Advantages'
import Asked from '@/components/Pages/Home/Asked/Asked'
import Hero from '@/components/Pages/Home/Hero/Hero'
import Places from '@/components/Pages/Home/Places/Places'
import RiseUp from '@/components/Pages/Home/RiseUp/RiseUp'
import Services from '@/components/Pages/Home/Services/Services'
import Special from '@/components/Pages/Home/Special/Special'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Hero/>
      <RiseUp/>
      <Places/>
      <Services/>
      <Special/>
      <Asked/>
      <Advantages/>
    </div>
  )
}
