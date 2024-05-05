'use client'
import React from 'react'
import { motion } from 'framer-motion'

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
      name: 'Next.js',
      icon: 'nextjs',
      level: 90,
    },

    {
      name: 'Svelte',
      icon: 'svelte',
      level: 85,
    },
    {
      name: 'Django',
      icon: 'django',
      level: 95,
    },
    {
      name: 'React Native',
      icon: 'rNative',
      level: 80,
    },
    {
      name: 'Rust',
      icon: 'Rust',
      level: 80,
    },
    {
      name: 'Tauri',
      icon: 'tauri',
      level: 75,
    },
    {
      name: 'Postgres',
      icon: 'postgres',
      level: 90,
    },
    {
      name: 'TailwindCSS',
      icon: 'tailwindcss',
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
        <div key={skill.name} className="flex items-center gap-4">
          <div className="text-base font-light w-1/5 text-right">{skill.icon}</div>
          <div className="grow">
            <motion.div
              variants={variants}
              style={{
                maxWidth: skill.level + '%',
              }}
              // @ts-ignore
              className="flex flex-row rounded-full border items-center w-full h-6 lg:h-8"
            ></motion.div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}
