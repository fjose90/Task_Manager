import { Category } from '@/domain/entities'

export interface DeleteCategoryRepository {
  delete: (params: DeleteCategoryRepository.Params) => Promise<DeleteCategoryRepository.Result>
}

export namespace DeleteCategoryRepository {
  export type Params = {id: string}
  export type Result = Category
}
