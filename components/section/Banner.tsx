'use client'

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import {Skeleton} from '../ui/skeleton'
import Particle from '../shared/Particle'
import Symbol from '../shared/Symbol'

interface AllAbout {
  about?: any
  isLoading?: boolean
}

export default function Banner({about, isLoading}: AllAbout) {
  return (
    <section className='relative h-screen' id='home'>
      <div className='absolute -z-10'>
        <Particle />
      </div>
      <div className='container absolute flex flex-col items-center justify-center w-full h-screen'>
        <h1 className='mb-5 text-6xl font-semibold text-center'>
          Hi, I am <span className='text-state-yellow'>Mert Okan</span>
        </h1>
        {isLoading ? (
          <Skeleton className='w-56 h-4 mb-6 ' />
        ) : (
          <p className='mb-6 text-lg font-light text-center text-neutral-3'>{about?.smallTitle}</p>
        )}
        <div className='flex items-center justify-center gap-3'>
          <Symbol to='https://www.linkedin.com/in/mert-okan/' target='_blank'>
            <FaLinkedin />
          </Symbol>
          <Symbol to='https://twitter.com/mert_okan_12' target='_blank'>
            <FaTwitter />
          </Symbol>
          <Symbol to='https://github.com/mertokan' target='_blank'>
            <FaGithub />
          </Symbol>
        </div>
      </div>
    </section>
  )
}
