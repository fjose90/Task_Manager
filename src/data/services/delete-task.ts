import { DeleteTask } from '@/domain/features/delete-task'
import { DeleteTaskRepository } from '../contracts'

export class DeleteTaskService implements DeleteTask {
  constructor (private readonly taskRepository: DeleteTaskRepository) {}

  async handle (params: DeleteTask.Params): Promise<DeleteTask.Result> {
    return await this.taskRepository.delete(params)
  }
}
