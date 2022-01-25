import { GetTasksRepository } from '@/data/contracts'
import { GetTasksService } from '@/data/services'
import { Task } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockedTasks: Task[] = [{
  title: 'any_title',
  description: 'any_description',
  isComplete: false,
  isFavorite: false
},
{
  title: 'Fazer comida',
  description: 'Fazer comida amanhã de manhã',
  isComplete: false,
  isFavorite: false
}
]

describe('GetTasksService', () => {
  let taskRepositoryMock: MockProxy<GetTasksRepository>
  let sut: GetTasksService

  beforeAll(() => {
    taskRepositoryMock = mock<GetTasksRepository>()
    taskRepositoryMock.loadTasks.mockResolvedValue(mockedTasks)
  })

  beforeEach(() => {
    sut = new GetTasksService(taskRepositoryMock)
  })

  it('should return tasks array if GetTasksRepository succeeds', async () => {
    const result = await sut.handle()
    expect(result).toEqual(mockedTasks)
  })

  it('should call Throws if GetTasksRepository throws', async () => {
    taskRepositoryMock.loadTasks.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })

    const promise = sut.handle()

    await expect(promise).rejects.toThrow(new Error('any_error'))
  })
})
