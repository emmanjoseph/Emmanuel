import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <section className='max-w-6xl mx-auto my-28 p-2 md:p-0' id='work'>
        <h1 className='text-4xl font-semibold text-center'>Selected Works</h1>
        <p className="text-base text-center py-4">
          Here is a selection of my latest projects
        </p>

      <div className="my-5 space-y-2">
  {/* Project 1: Prepwise */}
  <div className="bg-white/5 rounded-[55px] shadow-2xl border border-neutral-50/10">
    <div>
      <video
        src="/screenshots/prepwise.mp4"
        autoPlay
        loop
        muted
        className="w-full h-[300px] md:h-[500px] object-cover rounded-t-[55px]"
      ></video>
    </div>
    <div className="p-9">
      <h1 className="text-xl font-bold">AI Prep Interviewer</h1>
      <div className="text-sm py-1.5 text-neutral-300">AI • Real-time Feedback • Web</div>
      <p className="text-sm text-neutral-400 pt-3">
        Prepwise is an AI-powered mock interview tool that simulates realistic interview environments and provides instant feedback. Built using Google Gemini APIs and React, it helps candidates build confidence, skills and improve communication.
      </p>
    </div>
  </div>

  {/* Project 2: StoreIt */}
  <div className="grid md:grid-cols-2 gap-2">
    <div className="bg-white/5 rounded-[55px] shadow-2xl backdrop-blur-3xl border border-neutral-50/10">
      <div>
        <Image
          src={"/screenshots/storeit.png"}
          alt="storeit"
          width={1000}
          height={1000}
          className="rounded-t-[55px]"
        />
      </div>
      <div className="p-9">
        <h1 className="text-xl font-bold">Cloud Storage Platform</h1>
        <div className="text-sm py-1.5 text-neutral-300">Next.js • Appwrite • Uploads</div>
        <p className="text-sm text-neutral-400 pt-3">
          StoreIt is a secure file storage solution where users can upload, organize, and manage their files in the cloud. It features file previews, shareable links, and real-time updates using Appwrite and Tailwind CSS.
        </p>
      </div>
    </div>

    {/* Project 3: Library Management */}
    <div className="bg-white/5 rounded-[55px] shadow-2xl border border-neutral-50/10">
      <div>
        <Image
          src={"/screenshots/library.png"}
          alt="library"
          width={1000}
          height={1000}
          className="rounded-t-[55px]"
        />
      </div>
      <div className="p-9">
        <h1 className="text-xl font-bold">Library Management System</h1>
        <div className="text-sm py-1.5 text-neutral-300">Next.Js• Admin Dashboard • PostgreSQL</div>
        <p className="text-sm text-neutral-400 pt-3">
          This system helps academic institutions manage their libraries with ease—featuring book tracking and student history. Built with the MERN stack and designed for speed and clarity.
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default Work