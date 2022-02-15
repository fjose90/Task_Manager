export interface DeleteCommentary {
  handle: (params: DeleteCommentary.Params) => Promise<DeleteCommentary.Result>
}

export namespace DeleteCommentary {
  export type Params = {
    id: string
  }

  export type Result = Promise<void>
}
