import { Category } from '@/domain/entities'

export interface AddCategoryRepository {
  save: (params: AddCategoryRepository.Params) => Promise<AddCategoryRepository.Result>
}

export namespace AddCategoryRepository {
  export type Params = Category
  export type Result = {
    id: string
  }
}
