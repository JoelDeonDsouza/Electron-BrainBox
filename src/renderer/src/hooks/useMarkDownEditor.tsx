import { saveIdeaAtom, selectedIdeaAtom } from '@/store'
import { MDXEditorMethods } from '@mdxeditor/editor'
import { autoSavingTime } from '@shared/constants'
import { IdeaContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { throttle } from 'lodash'
import { useRef } from 'react'

export const useMarkDownEditor = () => {
  const selectedIdeaData = useAtomValue(selectedIdeaAtom)
  const saveIdeaData = useSetAtom(saveIdeaAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  // Handle saving //
  const handleAutoSave = throttle(
    async (content: IdeaContent) => {
      if (!selectedIdeaData) return
      // console.info('Auto save:', selectedIdeaData.title)
      await saveIdeaData(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectedIdeaData) return
    handleAutoSave.cancel()
    const content = editorRef.current?.getMarkdown()
    if (content != null) {
      await saveIdeaData(content)
    }
  }

  return {
    editorRef,
    handleAutoSave,
    selectedIdeaData,
    handleBlur
  }
}
