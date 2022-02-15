import { Commentary } from '@/domain/entities'
export interface SaveCommentaryRepository {
  save: (params: SaveCommentaryRepository.Params) => Promise<SaveCommentaryRepository.Result>
}

export namespace SaveCommentaryRepository {
  export type Params = Commentary
  export type Result = { id: string}
}
