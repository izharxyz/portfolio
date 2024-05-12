'use client'
import React, { useState } from 'react'
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

export const AnimatedTooltip = ({
  item,
}: {
  item: {
    id: number
    name: string
    icon: React.ReactNode
  }
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0) // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  // translate the tooltip
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

  const handleMouseMove = (event: any) => {
    const halfWidth = event.currentTarget.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) // set the x value, which is then used in transform and rotate
  }

  return (
    <div
      className="-mr-4  relative group"
      onMouseEnter={() => setHoveredIndex(item.id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <AnimatePresence>
        {hoveredIndex === item.id && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotate: rotate.get(),
              translateX: translateX.get(),
              transition: {
                type: 'spring',
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              whiteSpace: 'nowrap',
            }}
            // @ts-ignore
            className="absolute -top-12 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-background z-50 shadow-xl dark:shadow-gray-900 px-4 py-2"
          >
            <div className="absolute left-1/3 z-30 w-[40%] -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px " />
            <div className="absolute right-1/3 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-purple-600 to-transparent h-px " />
            <div className="font-light text-foreground relative z-30 text-sm">{item.name}</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        onMouseMove={handleMouseMove}
        className="!m-0 !p-0 rounded-full group-hover:scale-125 group-hover:z-30 relative transition duration-300"
      >
        {item.icon}
      </div>
    </div>
  )
}
