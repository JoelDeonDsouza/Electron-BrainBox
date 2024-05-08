import { NewIdeaBtn, TrashIdeaBtn } from '@/components'
import { ComponentProps } from 'react'

export const ActionBtnRow = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewIdeaBtn />
      <TrashIdeaBtn />
    </div>
  )
}
