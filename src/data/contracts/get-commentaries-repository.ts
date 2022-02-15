import { Commentary } from '@/domain/entities'

export interface GetCommentariesRepository {
  loadCommentaries: () => Promise<GetCommentariesRepository.Result>
}

export namespace GetCommentariesRepository {

  export type Result = Commentary[]
}
