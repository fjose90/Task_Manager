import { Category } from '@/domain/entities'

export interface UpdateCategoryRepository {
  update: (params: UpdateCategoryRepository.Params) => Promise<UpdateCategoryRepository.Result>
}

export namespace UpdateCategoryRepository {
  export type Params = Category & { id: string }

  export type Result = Category & { id: string }
}
