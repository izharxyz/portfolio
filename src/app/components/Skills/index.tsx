'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { AnimatedTooltip } from '../ui/animated-tooltip'

import { RiNextjsLine } from 'react-icons/ri'
import { RiSvelteFill } from 'react-icons/ri'
import { SiDjango } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaRust } from 'react-icons/fa'
import { SiTauri } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'

export const Skills = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  }
  const skills = [
    {
      id: 1,
      name: 'Next.js',
      icon: <RiNextjsLine size={32} className="text-black dark:text-white" />,
      level: 90,
    },

    {
      id: 2,
      name: 'Svelte',
      icon: <RiSvelteFill size={32} className="text-orange-600" />,
      level: 85,
    },
    {
      id: 3,
      name: 'Django',
      icon: <SiDjango size={32} className="text-green-600" />,
      level: 95,
    },
    {
      id: 4,
      name: 'React Native',
      icon: <TbBrandReactNative size={32} className="text-sky-500" />,
      level: 80,
    },
    {
      id: 5,
      name: 'Rust',
      icon: <FaRust size={32} className="text-stone-800 dark:text-stone-300" />,
      level: 80,
    },
    {
      id: 6,
      name: 'Tauri',
      icon: <SiTauri size={32} className="text-sky-600 dark:text-amber-300" />,
      level: 75,
    },
    {
      id: 7,
      name: 'Postgres',
      icon: <SiPostgresql size={32} className="text-sky-700" />,
      level: 90,
    },
    {
      id: 8,
      name: 'TailwindCSS',
      icon: <RiTailwindCssFill size={32} className="text-cyan-400" />,
      level: 95,
    },
  ]
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      // @ts-ignore
      className="flex gap-4 w-full h-full min-h-[8rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center justify-center gap-4"
          aria-label={skill.name}
        >
          <div className="text-base font-light w-10 flex items-center justify-center">
            <AnimatedTooltip item={skill} />
          </div>
          <div className="grow">
            <motion.div
              variants={variants}
              style={{
                maxWidth: skill.level + '%',
              }}
              // @ts-ignore
              className="flex flex-row rounded-full border items-center w-full h-5 lg:h-6"
            ></motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
