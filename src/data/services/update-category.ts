import { UpdateCategory } from '@/domain/features/update-category'
import { UpdateCategoryRepository } from '../contracts/update-category-repository'

export class UpdateCategoryService implements UpdateCategory {
  constructor (private readonly categoryRepository: UpdateCategoryRepository) {}

  async handle (params: UpdateCategory.Params): Promise<UpdateCategory.Result> {
    return await this.categoryRepository.update(params)
  }
}
