import { Category } from '@/domain/entities'
import { PgCategory } from '@/infra/database/postgres/entities'
import { PgCategoryRepository } from '@/infra/database/postgres/repositories'
import { makeDbConnection } from '@/tests/infra/database/postgres/mocks/connection'
import { getConnection } from 'typeorm'

const mockCategory: Category = {
  title: 'any_category_title',
  description: 'any_category_description',
  color: 'blue'
}

describe('PgCategoryRepository', () => {
  let sut: PgCategoryRepository

  beforeAll(async () => {
    await makeDbConnection([PgCategory])
  })

  afterAll(async () => {
    await getConnection().close()
  })

  beforeEach(() => {
    sut = new PgCategoryRepository()
  })

  it('should create a new Category', async () => {
    const result = await sut.save(mockCategory)
    expect(result).toEqual({ id: '1' })
  })

  it('should update a existent Category', async () => {
    const result = await sut.update({ id: '1', title: 'any category title', description: 'any category description', color: 'pink' })
    expect(result).toEqual({ id: '1', title: 'any category title', description: 'any category description', color: 'pink' })
  })
})
