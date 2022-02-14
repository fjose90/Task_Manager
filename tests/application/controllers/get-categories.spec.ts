import { GetCategoriesController } from '@/application/controllers'
import { GetCategories } from '@/domain/features/get-categories'
import { mock, MockProxy } from 'jest-mock-extended'

describe('GetCategoriesController', () => {
  let getCategoriesMock: MockProxy<GetCategories>
  let sut: GetCategoriesController

  beforeAll(() => {
    getCategoriesMock = mock<GetCategories>()
  })

  beforeEach(() => {
    sut = new GetCategoriesController(getCategoriesMock)
  })

  it('Get categories', async () => {
    const mockedCategories = [{ title: 'Casa', description: 'Categoria que identifica tarefas de casa', color: 'orange' },
      { title: 'Trabalho', description: 'Categoria que identifica tarefas de trabalho', color: 'red' }]

    getCategoriesMock.handle.mockResolvedValueOnce(mockedCategories)

    const result = await sut.handle({})

    expect(result.statusCode).toBe(200)

    expect(result).toEqual({
      statusCode: 200,
      data: mockedCategories
    })
  })
})
