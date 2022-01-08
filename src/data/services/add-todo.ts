import { AddTask } from '@/domain/features/add-task'
import { AddTaskRepository } from '../contracts'

export class AddTaskService {
  constructor (private readonly taskRepository: AddTaskRepository) {}

  async handle (params: AddTask.Params): Promise<void> {
    await this.taskRepository.save(params)
  }
}
