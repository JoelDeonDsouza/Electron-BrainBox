import { appDirectoryName, fileEncoding } from '@shared/constants'
import { IdeaInfo } from '@shared/models'
import { GetIdeas, ReadIdea } from '@shared/types'
import { ensureDir, readFile, readdir, stat } from 'fs-extra'
import { homedir } from 'os'

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
