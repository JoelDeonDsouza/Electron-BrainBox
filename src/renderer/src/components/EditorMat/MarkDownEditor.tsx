import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  thematicBreakPlugin
} from '@mdxeditor/editor'
import { useMarkDownEditor } from '@renderer/hooks/useMarkDownEditor'

export const MarkDownEditor = () => {
  const { selectedIdeaData } = useMarkDownEditor()
  if (!selectedIdeaData) return null
  return (
    <MDXEditor
      key={selectedIdeaData.title}
      markdown={selectedIdeaData.content}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        markdownShortcutPlugin(),
        thematicBreakPlugin()
      ]}
      contentEditableClassName="outline-none min-h-screen max-w-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-heading:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
