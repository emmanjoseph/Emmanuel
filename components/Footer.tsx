import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-6xl mx-auto mt-24 mb-20 p-4 md:p-0'>
        <div className="flex flex-col pt-14 border-t">
            <div className='flex items-center justify-between'>
                <p className='text-sm'>
                    Emmanuel Mulwa {new Date().getFullYear()}
                </p>
                <div className="flex space-x-4">
                    <Link href={"/"}><IconBrandLinkedin size={18}/></Link>
                    <Link href={"/"}><IconBrandGithub size={18}/></Link>
                    <Link href={"/"}><IconBrandTwitter size={18}/></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer