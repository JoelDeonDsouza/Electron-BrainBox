import {
  ActionBtnRow,
  Content,
  DragTopBar,
  FloatingTitle,
  IdeaViewList,
  MarkDownEditor,
  RootLayout,
  SideBar
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentScrollRef = useRef<HTMLDivElement>(null)
  const resetScroll = () => {
    contentScrollRef.current?.scrollTo(0, 0)
  }
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <SideBar className="p-2">
          <ActionBtnRow className="flex justify-between mt-1" />
          <IdeaViewList className="mt-3 space-1" onSelect={resetScroll} />
        </SideBar>
        <Content ref={contentScrollRef} className="border-l bg-zinc-900/50 border-l-white/20">
          <FloatingTitle className="pt-2" />
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}
export default App
