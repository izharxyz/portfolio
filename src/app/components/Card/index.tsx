'use client'
import { cn } from '@/utilities/cn'
import useClickableCard from '@/utilities/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Post } from '../../../payload-types'

import { Media } from '../Media'

import { CardBody, CardContainer, CardItem } from '@/components/ui/ThreeDCard'

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Post
  relationTo?: 'posts'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  return (
    <CardContainer className="inter-var">
      <CardBody className="min-h-[29rem] h-full w-full border border-border rounded-xl overflow-hidden bg-card relative group/card hover:cursor-pointer dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2]">
        <CardItem translateZ="100" rotateX={10} rotateZ={-5} className="w-full p-4">
          {!metaImage && <div className="">No image</div>}
          {metaImage && typeof metaImage !== 'string' && (
            <Media
              resource={metaImage}
              className="h-full w-full object-cover rounded-xl overflow-hidden"
            />
          )}
        </CardItem>

        <div className="p-4">
          {showCategories && hasCategories && (
            <div className="uppercase text-sm mb-4">
              {showCategories && hasCategories && (
                <div>
                  {categories?.map((category, index) => {
                    if (typeof category === 'object') {
                      const { title: titleFromCategory } = category

                      const categoryTitle = titleFromCategory || 'Untitled category'

                      const isLast = index === categories.length - 1

                      return (
                        <Fragment key={index}>
                          {categoryTitle}
                          {!isLast && <Fragment>, &nbsp;</Fragment>}
                        </Fragment>
                      )
                    }

                    return null
                  })}
                </div>
              )}
            </div>
          )}
          {titleToUse && (
            <CardItem as="div" translateZ="50" className="prose">
              <h3>
                <Link
                  className="not-prose hover:text-purple-600 duration-300"
                  href={href}
                  ref={link.ref}
                >
                  {titleToUse}
                </Link>
              </h3>
            </CardItem>
          )}
          {description && (
            <CardItem as="p" translateZ="60" className="mt-2">
              {sanitizedDescription}
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  )
}
