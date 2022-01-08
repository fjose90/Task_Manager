import { Task } from '@/domain/entities'
import { AddTask } from '@/domain/features/add-task'
import { mock } from 'jest-mock-extended'

class AddTaskService {
  constructor (private readonly taskRepository: AddTaskRepository) {}

  async handle (params: AddTask.Params): Promise<void> {
    await this.taskRepository.save(params)
  }
}

interface AddTaskRepository {
  save: (params: AddTaskRepository.Params) => Promise<AddTaskRepository.Result>
}

namespace AddTaskRepository {
  export type Params = Task
  export type Result = {
    id: string
  }
}

const mockTask: Task = {
  title: 'any_title',
  description: 'any_description',
  isCompleted: false,
  isFavorite: false
}

describe('AddTaskService', () => {
  it('should call AddTaskRepository with correct params', async () => {
    const taskRepositorySpy = mock<AddTaskRepository>()
    const sut = new AddTaskService(taskRepositorySpy)

    await sut.handle(mockTask)

    expect(taskRepositorySpy.save).toHaveBeenCalledWith(mockTask)
  })

  it('should call Throws if AddTaskRepository throws', async () => {
    const taskRepositorySpy = mock<AddTaskRepository>()
    taskRepositorySpy.save.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })
    const sut = new AddTaskService(taskRepositorySpy)

    const promise = sut.handle(mockTask)

    await expect(promise).rejects.toThrow(new Error('any_error'))
  })
})
