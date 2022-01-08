import { AddTask } from '@/domain/features/add-task'
import { AddTaskRepository } from '../contracts'

export class AddTaskService implements AddTask {
  constructor (private readonly taskRepository: AddTaskRepository) {}

  async handle (params: AddTask.Params): Promise<AddTask.Result> {
    return await this.taskRepository.save(params)
  }
}
