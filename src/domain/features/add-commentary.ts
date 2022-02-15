import { Commentary } from '@/domain/entities'
export interface AddCommentary {
  add: (params: AddCommentary.Params) => Promise<AddCommentary.Result>
}

export namespace AddCommentary {
  export type Params = Commentary
  export type Result = {id: string}
}
