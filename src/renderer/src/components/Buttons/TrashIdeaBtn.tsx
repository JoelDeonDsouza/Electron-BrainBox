import { ActionBtn, ActionBtnProps } from '@/components'
import { IoMdTrash } from 'react-icons/io'

export const TrashIdeaBtn = ({ ...props }: ActionBtnProps) => {
  return (
    <ActionBtn {...props}>
      <IoMdTrash className="w-4 h-4 text-zinc-300" />
    </ActionBtn>
  )
}
