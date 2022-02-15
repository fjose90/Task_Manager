export interface DeleteCommentaryRepository {
  deleteById: (params: DeleteCommentaryRepository.Params) => Promise<DeleteCommentaryRepository.Result>
}

export namespace DeleteCommentaryRepository {
  export type Params = {id: string}
  export type Result = Promise<void>
}
