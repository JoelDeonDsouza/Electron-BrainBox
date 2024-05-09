import { appDirectoryName, fileEncoding } from '@shared/constants'
import { IdeaInfo } from '@shared/models'
import { CreateIdea, DeleteIdea, GetIdeas, ReadIdea, WriteIdea } from '@shared/types'
import { dialog } from 'electron'
import { ensureDir, readFile, readdir, remove, stat, writeFile } from 'fs-extra'
import { homedir } from 'os'
import path from 'path'

export const getRootDir = () => {
  return `${homedir()}/${appDirectoryName}`
}

export const getIdeas: GetIdeas = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const ideasFileNames = await readdir(rootDir, { encoding: fileEncoding, withFileTypes: false })
  const ideas = ideasFileNames.filter((filename) => filename.endsWith('.md'))
  return Promise.all(ideas.map(getIdeaInfoFromFileName))
}

export const getIdeaInfoFromFileName = async (filename: string): Promise<IdeaInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)
  return {
    title: filename.replace(/\.md$/, ''),
    lastUpdated: fileStats.mtimeMs
  }
}

export const readIdea: ReadIdea = async (filename) => {
  const rootDir = getRootDir()
  return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}

export const writeIdea: WriteIdea = async (filename, content) => {
  const rootDir = getRootDir()
  console.info(`Writing ${filename}`)
  return writeFile(`${rootDir}/${filename}.md`, content, { encoding: fileEncoding })
}

// Create a new idea //
export const createIdea: CreateIdea = async () => {
  const rootDir = getRootDir()
  await ensureDir(rootDir)
  const { filePath, canceled } = await dialog.showSaveDialog({
    title: 'New idea',
    defaultPath: `${rootDir}/Untitled.md`,
    buttonLabel: 'Create',
    properties: ['showOverwriteConfirmation'],
    showsTagField: false,
    filters: [{ name: 'Markdown', extensions: ['md'] }]
  })
  if (canceled || !filePath) {
    console.info('Idea creation cancelled')
    return false
  }
  const { name: filename, dir: parentDir } = path.parse(filePath)
  if (parentDir !== rootDir) {
    await dialog.showMessageBox({
      type: 'error',
      title: 'Failed creating idea',
      message: `All ideas should be saved in ${rootDir} avoid using other editors`
    })
    return false
  }
  console.info(`Creating idea: ${filePath}`)
  await writeFile(filePath, '')
  return filename
}

// Delete  idea //
export const deleteIdea: DeleteIdea = async (filename) => {
  const rootDir = getRootDir()
  const { response } = await dialog.showMessageBox({
    type: 'warning',
    title: 'Delete Idea',
    message: `Are you sure you want to delete ${filename}?`,
    buttons: ['Delete', 'Cancel'],
    defaultId: 1,
    cancelId: 1
  })
  if (response === 1) {
    console.info('Idea deletin canceled')
    return false
  }
  console.info(`Idea deleted: ${filename}`)
  await remove(`${rootDir}/${filename}.md`)
  return true
}
