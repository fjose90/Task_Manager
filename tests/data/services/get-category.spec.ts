import { GetCategoriesRepository } from '@/data/contracts'
import { GetCategoriesService } from '@/data/services'
import { Category } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockedCategories: Category[] = [{
  title: 'any_title',
  description: 'any_description',
  color: 'pink'
},
{
  title: 'Faculdade',
  description: 'Categoria para definir tarefas da faculdade',
  color: 'pink'
}
]

describe('GetCategoriesService', () => {
  let categoryRepositoryMock: MockProxy<GetCategoriesRepository>
  let sut: GetCategoriesService

  beforeAll(() => {
    categoryRepositoryMock = mock<GetCategoriesRepository>()
    categoryRepositoryMock.loadCategories.mockResolvedValue(mockedCategories)
  })

  beforeEach(() => {
    sut = new GetCategoriesService(categoryRepositoryMock)
  })

  it('should return categories array if GetCategoriesRepository succeeds', async () => {
    const result = await sut.handle()
    expect(result).toEqual(mockedCategories)
  })

  it('should call Throws if GetCategoriesRepository throws', async () => {
    categoryRepositoryMock.loadCategories.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })

    const promise = sut.handle()

    await expect(promise).rejects.toThrow(new Error('any_error'))
  })
})
