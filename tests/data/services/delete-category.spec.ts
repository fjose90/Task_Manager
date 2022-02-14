import { DeleteCategoryRepository } from '@/data/contracts'
import { DeleteCategoryService } from '@/data/services'
import { mock, MockProxy } from 'jest-mock-extended'

describe('DeleteCategoryService', () => {
  let categoryRepositorySpy: MockProxy<DeleteCategoryRepository>

  beforeAll(() => {
    categoryRepositorySpy = mock<DeleteCategoryRepository>()
    categoryRepositorySpy.delete.mockClear()
  })

  it('should call DeleteCategoryRepository with correct params', async () => {
    await DeleteCategoryService

    expect(categoryRepositorySpy.delete)
  })

  it('should call Throws if DeleteCategoryRepository throws', async () => {
    categoryRepositorySpy.delete.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })
  })
})
