import {
  ActionBtnRow,
  Content,
  DragTopBar,
  IdeaViewList,
  MarkDownEditor,
  RootLayout,
  SideBar
} from '@/components'

const App = () => {
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <SideBar className="p-2">
          <ActionBtnRow className="flex justify-between mt-1" />
          <IdeaViewList className="mt-3 space-1" />
        </SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <MarkDownEditor />
        </Content>
      </RootLayout>
    </>
  )
}
export default App
