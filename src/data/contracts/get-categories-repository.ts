import { Category } from '@/domain/entities'

export interface GetCategoriesRepository {
  loadCategories: () => Promise<GetCategoriesRepository.Result>
}

export namespace GetCategoriesRepository {

  export type Result = Category[]
}
