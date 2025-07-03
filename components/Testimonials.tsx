"use client"
import React from 'react'
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { IconBrandWhatsapp, IconStarFilled } from '@tabler/icons-react'
import { ChevronRight } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'
import Link from 'next/link'


const reviews = [
  {
    name: "Sarah Kim",
    role: "Product Manager",
    review:
      "The platform made launching our mobile app seamless. The intuitive interface and robust features saved us weeks of development time.",
    type: "client",
  },
  {
    name: "Priya Patel",
    role: "Startup Founder",
    review:
      "Our team launched a polished app in record time. The tools are user-friendly, and the documentation is clear and extremely helpful.",
    type: "client",
  },

  {
    name: "Collins Mbuvi",
    role: "FullStack developer",
    review:
      "I was impressed by the speed and flexibility. Deploying modern web apps has never been easier, and the support team is fantastic.",
    type: "developer",
  },
  {
    name: "Elijah Ondiek",
    role: "Software Engineer",
    review:
      "The platform’s modern design tools allowed us to create beautiful interfaces quickly. Collaboration with developers was smooth and efficient.",
    type: "developer",
  },
   {
    name: "Amos Kyalo",
    role: "Fullstack Developer",
    review:
      " The platform’s reliability and performance exceeded our expectations, making it a great choice.",
    type: "client",
  },
]


const Testimonials = () => {
  return (
    <section className='max-w-6xl mx-auto my-28 p-4 md:p-0 space-y-5' id='work'>
        <div className="flex flex-col items-center justify-center gap-3">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Testimonials
    </span>
    <ChevronRight size={15}/>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
            <h1 className='text-center text-2xl font-bold'>Kind words from clients and fellow developers</h1>
        </div>

        <div className="py-10">
              <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}        
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4 md:p-5 lg:p-6 border border-neutral-100/20 rounded-3xl">
              <div className="flex space-x-1 py-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStarFilled key={index} size={13} className="text-yellow-400" />
                ))}
              </div>
              <div>
                <p className="pt-6 pb-7 text-sm text-neutral-200">{item.review}</p>
                <div className="pt-2 border-t flex gap-2 items-center">
                  <div className="size-9 rounded-full bg-gradient-to-br from-rose-500 to-purple-500" />
                  <div>
                    <h3 className="font-semibold text-[15px]">{item.name}</h3>
                  <span className="text-xs -mt-1.5 text-neutral-100/50">{item.role}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
        </div>
      

         <div className="h-[25rem] w-full  relative flex flex-col items-center justify-center bg-neutral-50/5 antialiased border border-hairline border-neutral-200/30 rounded-[50px]">

           <div className="absolute inset-0 z-0 pointer-events-none rounded-4xl bg-gradient-to-br from-rose-500/20 via-purple-500/10 to-transparent blur-xl" />


      <div className="max-w-2xl mx-auto p-4" id='contact'>
        <h1 className="relative z-10 text-2xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-neutral-600  text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-200 max-w-lg mx-auto my-2 text-[15px] text-center relative z-10">
          Ready to take your project to the next level? Let's connect! Whether you have a question, need advice, or want to discuss a potential collaboration, I'm here to help.
        </p>
       

       <div className="flex items-center gap-5 justify-center-safe mt-5">
          <Link href={'mailto:emmajoseph607@gmail.com'} className='px-6 py-2 bg-neutral-200 text-black rounded-3xl'>
          <span className="text-sm">Get in Touch</span>
          </Link>

          <p className='flex items-center gap-1.5 text-sm font-medium'><IconBrandWhatsapp className='text-green-500' size={15}/> +254700441147</p>
       </div>
      </div>
      <BackgroundBeams />
    </div>
        
    </section>
  )
}

export default Testimonials

