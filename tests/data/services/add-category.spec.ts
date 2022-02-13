import { AddCategoryRepository } from '@/data/contracts'
import { AddCategoryService } from '@/data/services'
import { Category } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockCategory: Category = {
  title: 'any_title',
  description: 'any_description',
  color: 'green'
}

describe('AddCategoryService', () => {
  let categoryRepositorySpy: MockProxy<AddCategoryRepository>
  let sut: AddCategoryService

  beforeAll(() => {
    categoryRepositorySpy = mock<AddCategoryRepository>()
    categoryRepositorySpy.save.mockResolvedValue({
      id: '1'
    })
  })

  beforeEach(() => {
    sut = new AddCategoryService(categoryRepositorySpy)
  })

  it('should call AddCategoryRepository with correct params', async () => {
    await sut.handle(mockCategory)

    expect(categoryRepositorySpy.save).toHaveBeenCalledWith(mockCategory)
  })

  it('should return category id if AddCategoryRepository succeeds', async () => {
    const result = await sut.handle(mockCategory)
    expect(result).toEqual({
      id: '1'
    })
  })

  it('should call Throws if AddCategoryRepository throws', async () => {
    categoryRepositorySpy.save.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })

    const promise = sut.handle(mockCategory)

    await expect(promise).rejects.toThrow(new Error('any_error'))
  })
})
