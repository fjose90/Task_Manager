import { UpdateTask } from '@/domain/features/update-task'
import { UpdateTaskRepository } from '../contracts/update-task-repository'

export class UpdateTaskService implements UpdateTask {
  constructor (private readonly taskRepository: UpdateTaskRepository) {}

  async handle (params: UpdateTask.Params): Promise<UpdateTask.Result> {
    return await this.taskRepository.update(params)
  }
}
