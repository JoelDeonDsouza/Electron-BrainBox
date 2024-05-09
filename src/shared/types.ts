import { IdeaContent, IdeaInfo } from './models'

export type GetIdeas = () => Promise<IdeaInfo[]>
export type ReadIdea = (title: IdeaInfo['title']) => Promise<IdeaContent>
export type WriteIdea = (title: IdeaInfo['title'], content: IdeaContent) => Promise<void>
