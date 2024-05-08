import { ActionBtn, ActionBtnProps } from '@/components'
import { createEmptyIdeaAtom } from '@/store'
import { useSetAtom } from 'jotai'
import { IoIosCreate } from 'react-icons/io'

export const NewIdeaBtn = ({ ...props }: ActionBtnProps) => {
  const createEmptyIdea = useSetAtom(createEmptyIdeaAtom)
  const handleCreate = () => {
    createEmptyIdea()
  }
  return (
    <ActionBtn onClick={handleCreate} {...props}>
      <IoIosCreate className="w-4 h-4 text-zinc-300" />
    </ActionBtn>
  )
}
