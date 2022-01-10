import { GetTasksController } from '@/application/controllers'
import { GetTasks } from '@/domain/features/get-tasks'
import { mock, MockProxy } from 'jest-mock-extended'

describe('GetTasksController', () => {
  let getTasksMock: MockProxy<GetTasks>
  let sut: GetTasksController

  beforeAll(() => {
    getTasksMock = mock<GetTasks>()
  })

  beforeEach(() => {
    sut = new GetTasksController(getTasksMock)
  })

  it('Get tasks', async () => {
    const mockedTasks = [{ title: 'Arrumar casa', description: 'Arrumar a casa a tarde', isComplete: false, isFavorite: false },
      { title: 'Lavar roupa', description: 'Lavar e estender roupas brancas', isComplete: true, isFavorite: false }]

    getTasksMock.handle.mockResolvedValueOnce(mockedTasks)

    const result = await sut.handle({})

    expect(result.statusCode).toBe(200)

    expect(result).toEqual({
      statusCode: 200,
      data: mockedTasks
    })
  })
})
