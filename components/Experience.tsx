import React from 'react'
import { Timeline } from './ui/timeline';

const Experience = () => {
      const data = [
  {
    title: "2024",
    content: (
      <div className='flex flex-col space-y-3'>
        <h1 className="text-2xl font-semibold">Simplex Technologies</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Frontend Developer</p>
        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Designed and built modern UI components using Next.js, Tailwind CSS, and TypeScript. Collaborated across teams to deliver scalable web applications and dashboards.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">React • Next.js</p>
          <p className="text-xs dark:text-neutral-400">TailwindCSS • TypeScript</p>
        </div>
      </div>
    ),
  },
  {
    title: "Early 2025",
    content: (
      <div className='flex flex-col space-y-3'>
        <h1 className="text-2xl font-semibold">African Instrumental Technologies</h1>
        <div className="flex space-x-5">
          <div className="size-4 rounded-full border flex items-center justify-center">
            <div className="bg-white size-2 rounded-full animate-ping" />
          </div>
          <p className='text-neutral-200 text-sm font-medium'>Full-Stack Developer</p>
        </div>
        <p className="text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Spearheading the development of a mobile-first platform for African musicians and producers. Built RESTful APIs with Node.js and MongoDB and integrated Google OAuth and OTP login flows.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Implemented Sanity CMS for dynamic content and built real-time collaboration features using WebSockets.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">Node.js • MongoDB</p>
          <p className="text-xs dark:text-neutral-400">Sanity.io • Express</p>
        </div>
      </div>
    ),
  },
  {
    title: "Changelog",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Recently shipped several key features and improvements on client projects:
        </p>
        <div className="mb-8 space-y-1">
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Real-time chat component with Socket.io
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Aceternity UI Pro: Dark/light mode toggle + Accessibility support
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Integrated Google OAuth and custom OTP system
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Deployment pipeline set up with Vercel + CI/CD using GitHub Actions
          </div>
          <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            ✅ Added multi-language support using i18n for international clients
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <p className="text-xs dark:text-neutral-400">Socket.io</p>
          <p className="text-xs dark:text-neutral-400">CI/CD • i18n</p>
        </div>
      </div>
    ),
  },
];

  return (
    <section className='max-w-7xl mx-auto mt-20 p-4 md:p-0' id='experience'>
        <Timeline data={data} />
    </section>
  )
}

export default Experience