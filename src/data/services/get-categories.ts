import { GetCategories } from '@/domain/features/get-categories'
import { GetCategoriesRepository } from '../contracts'

export class GetCategoriesService implements GetCategories {
  constructor (private readonly taskRepository: GetCategoriesRepository) {}

  async handle (): Promise<GetCategories.Result> {
    return await this.taskRepository.loadCategories()
  }
}
