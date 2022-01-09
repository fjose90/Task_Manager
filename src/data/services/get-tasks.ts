import { GetTasks } from '@/domain/features/get-tasks'
import { GetTasksRepository } from '../contracts'

export class GetTasksService implements GetTasks {
  constructor (private readonly taskRepository: GetTasksRepository) {}

  async handle (params: GetTasks.Params): Promise<GetTasks.Result> {
    return await this.taskRepository.loadTasks(params)
  }
}
