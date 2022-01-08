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
})
