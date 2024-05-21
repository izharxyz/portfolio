import { cn } from '@/utilities/cn'
import React from 'react'

import type { Post } from '../../../payload-types'

import { Card } from '../Card'

export type Props = {
  posts: Post[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { posts } = props

  return (
    <div className={cn('container overflow-hidden py-4 lg:py-8')}>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8">
          {posts?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <Card
                  key={index}
                  className="h-full"
                  doc={result}
                  relationTo="posts"
                  showCategories
                />
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
