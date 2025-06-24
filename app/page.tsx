import About from '@/components/About'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Testimonials from '@/components/ui/Testimonials'
import Work from '@/components/Work'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Experience/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home