import { Category } from '@/domain/entities'

export interface AddCategory {
  handle: (params: AddCategory.Params) => Promise<AddCategory.Result>
}

export namespace AddCategory {
  export type Params = Category

  export type Result = {
    id: string
  }
}
