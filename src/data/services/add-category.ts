import { AddCategory } from '@/domain/features/add-category'
import { AddCategoryRepository } from '../contracts'

export class AddCategoryService implements AddCategory {
  constructor (private readonly categoryRepository: AddCategoryRepository) {}

  async handle (params: AddCategory.Params): Promise<AddCategory.Result> {
    return await this.categoryRepository.save(params)
  }
}
