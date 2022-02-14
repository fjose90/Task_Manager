import { getRepository } from 'typeorm'
import { AddCategoryRepository, GetCategoriesRepository, DeleteCategoryRepository, UpdateCategoryRepository } from '@/data/contracts'
import { Category } from '@/domain/entities'
import { PgCategory } from '@/infra/database/postgres/entities'

export class PgCategoryRepository {
  async save (category: Category): Promise<AddCategoryRepository.Result> {
    const pgCategoryRepository = getRepository(PgCategory)

    const { id } = await pgCategoryRepository.save(category)
    return { id: id.toString() }
  }

  async loadCategories (): Promise<GetCategoriesRepository.Result> {
    const pgCategoryRepository = getRepository(PgCategory)

    const pgResult = await pgCategoryRepository.find()

    return pgResult
  }

  async delete (params: DeleteCategoryRepository.Params): Promise<DeleteCategoryRepository.Result> {
    const pgCategoryRepository = getRepository(PgCategory)
    const result = await pgCategoryRepository.delete(params.id)
    return result.raw
  }

  async update ({ id, title, description, color }: UpdateCategoryRepository.Params): Promise<UpdateCategoryRepository.Result> {
    const pgCategoryRepository = getRepository(PgCategory)
    const categoryToUpdate = { title, description, color }
    await pgCategoryRepository.update(id, categoryToUpdate)
    return { ...categoryToUpdate, id }
  }
}
