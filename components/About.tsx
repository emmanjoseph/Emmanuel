"use client"
import { useState } from "react"
import { Button } from "./ui/button";
import Image from "next/image";
import Globe from "./Globewrapper";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("emmajoseph607@gmail.com")
    setHasCopied(true)
  }

  return (
    <section className="max-w-7xl mx-auto mt-20 p-4 md:p-0" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-6 md:gap-2 h-full">
        
        {/* Grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
              width={1000}
              height={1000}
            />
            <div>
              <p className="grid-headtext">Hello I&apos;m Emmanuel</p>
              <p className="grid-subtext">
                With 3 years experience in frontend development and backend concepts, I focus on building fast, modern applications.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <Image
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:h-[276px] h-fit object-contain"
              width={1000}
              height={1000}
            />
            <div>
              <p className="grid-headtext">Techstack</p>
              <p className="grid-subtext">
                I specialize in JavaScript/TypeScript with a focus on React and Next.js. I&apos;m also proficient in backend tools like Node.js, Express, and MongoDB for building full-stack apps.
              </p>
            </div>
           
          </div>
        </div>

        {/* Grid 3 (Globe) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[276px] h-fit flex justify-center items-center">
              <Globe
                width={300}
                height={300}
                backgroundColor="rgb(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I can work remotely</p>
              <p className="grid-subtext">
                I&apos;m based in Nairobi, Kenya and available for remote work.
              </p>
              <a href="#contact">
                <Button className="w-full h-12 rounded-xl bg-white/5 text-white hover:bg-white hover:text-black shadow-xl">Contact me</Button>
              </a>
            </div>
          </div>
        </div>

        {/* Grid 4 (Passion) */}
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <Image
              src={'/assets/grid3.png'}
              alt="grid-3"
              className="w-full sm:h-[206px] h-fit object-contain"
              width={1000}
              height={1000}
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my profession—it&apos;s my passion. I enjoy exploring new technologies and continuously sharpening my skills.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 (Contact) */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <Image
              src="/assets/grid4.png"
              alt="grid4"
              className="w-full h-fit object-cover sm:object-top"
              width={1000}
              height={1000}
            />
            <div className="-mt-5">
              <p className="grid-subtext text-center">Contact me</p>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={handleCopy}
              >
                <p className="bg-gradient-to-r from-cyan-50 via-blue-100 to-blue-50 text-transparent bg-clip-text">
                  emmajoseph607@gmail.com
                </p>
                <Image src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="icon" width={20} height={20}/>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
