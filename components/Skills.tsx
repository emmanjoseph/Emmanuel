import { ChevronRight } from 'lucide-react'
import React from 'react'
import GlowCard from './ui/GlowCard'
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandGit,
  IconBrandMysql,
  IconBrandFramerMotion,
  IconBrandFigma,
  IconBrandRedux,
  IconBrandVercel,
} from '@tabler/icons-react'

const skills = [
  {
    icon: <IconBrandNextjs size={45} />,
    name: "Next.JS"
  },
  {
    icon: <IconBrandReact size={45} />,
    name: "React"
  },
  {
    icon: <IconBrandTypescript size={45} />,
    name: "TypeScript"
  },
  {
    icon: <IconBrandJavascript size={45} />,
    name: "JavaScript"
  },
  {
    icon: <IconBrandTailwind size={45} />,
    name: "Tailwind CSS"
  },
   {
    icon: <IconBrandFramerMotion size={45} />,
    name: "Framer Motion"
  },
  {
    icon: <IconBrandNodejs size={45} />,
    name: "Node.Js"
  },
  {
    icon: <IconBrandMysql size={45} />,
    name: "PostgreSQL "
  },
  {
    icon: <IconBrandGit size={45} />,
    name: "Git and Github"
  },
  
  {
    icon: <IconBrandFigma size={45} />,
    name: "Figma"
  },
  {
    icon: <IconBrandRedux size={45} />,
    name: "Redux"
  },
  {
    icon: <IconBrandVercel size={45} />,
    name: "Vercel"
  },
  
]

const Skills = () => {
  return (
    <section className='max-w-6xl mx-auto my-32 p-4 md:p-0 space-y-5' id='skills'>
      <div className="flex flex-col items-center justify-center gap-3">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              My Skills
            </span>
            <ChevronRight size={15}/>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <h1 className='text-center text-4xl font-bold'>
          What I work with
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {skills.map((skill, idx) => (
          <GlowCard key={skill.name}>
            <div className="flex flex-col items-center gap-2 py-2 ">
              {skill.icon}
              
            </div>
            <span className="mt-2 font-medium">{skill.name}</span>
          </GlowCard>
        ))}
      </div>
    </section>
  )
}

export default Skills