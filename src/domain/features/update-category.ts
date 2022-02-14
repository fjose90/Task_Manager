import { Category } from '@/domain/entities'

export interface UpdateCategory {
  handle: (params: UpdateCategory.Params) => Promise<UpdateCategory.Result>
}

export namespace UpdateCategory {
  export type Params = Category & { id: string }

  export type Result = Category & { id: string }

}
