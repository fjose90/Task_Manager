import { DeleteCategory } from '@/domain/features/delete-category'
import { DeleteCategoryRepository } from '../contracts'

export class DeleteCategoryService implements DeleteCategory {
  constructor (private readonly categoryRepository: DeleteCategoryRepository) {}

  async handle (params: DeleteCategory.Params): Promise<DeleteCategory.Result> {
    return await this.categoryRepository.delete(params)
  }
}
