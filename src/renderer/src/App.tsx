import { Content, DragTopBar, RootLayout, SideBar } from '@/components'

const App = () => {
  return (
    <>
      <DragTopBar />
      <RootLayout>
        <SideBar className="p-2">SibeBar</SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}
export default App
