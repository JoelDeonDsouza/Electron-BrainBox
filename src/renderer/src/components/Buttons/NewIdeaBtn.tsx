import { ActionBtn, ActionBtnProps } from '@/components'
import { IoIosCreate } from 'react-icons/io'

export const NewIdeaBtn = ({ ...props }: ActionBtnProps) => {
  return (
    <ActionBtn {...props}>
      <IoIosCreate className="w-4 h-4 text-zinc-300" />
    </ActionBtn>
  )
}
