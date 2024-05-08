import { useIdeasList } from '@/hooks/useIdeasList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { IdeaView } from './IdeaView'

export type IdeaPreviewListProps = ComponentProps<'ul'> & {
  onSelect?: () => void
}

export const IdeaViewList = ({ onSelect, className, ...props }: IdeaPreviewListProps) => {
  const { ideas, selectedIdeaIndex, handleIdeaSelect } = useIdeasList({ onSelect })
  if (ideas.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <li>Start crafting</li>
      </ul>
    )
  }
  return (
    <ul className={className} {...props}>
      {ideas.map((idea, index) => (
        <IdeaView
          key={idea.title}
          onClick={handleIdeaSelect(index)}
          isActive={selectedIdeaIndex === index}
          {...idea}
        />
      ))}
    </ul>
  )
}
