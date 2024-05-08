import { ActionBtn, ActionBtnProps } from '@/components'
import { deleteIdeaAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { IoMdTrash } from 'react-icons/io'

export const TrashIdeaBtn = ({ ...props }: ActionBtnProps) => {
  const deleteIdea = useSetAtom(deleteIdeaAtom)
  const handleDelete = () => {
    deleteIdea()
  }
  return (
    <ActionBtn onClick={handleDelete} {...props}>
      <IoMdTrash className="w-4 h-4 text-zinc-300" />
    </ActionBtn>
  )
}
