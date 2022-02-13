import { Category } from '@/domain/entities'

export interface DeleteCategory {
  handle: (params: DeleteCategory.Params) => Promise<DeleteCategory.Result>
}

export namespace DeleteCategory {
  export type Params = {
    id: string
  }

  export type Result = Category
}
