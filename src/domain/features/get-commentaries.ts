import { Commentary } from '@/domain/entities'

export interface GetCommentaries {
  handle: () => Promise<GetCommentaries.Result>
}

export namespace GetCommentaries {

  export type Result = Commentary[]

}
