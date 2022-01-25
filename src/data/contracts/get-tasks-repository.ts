import { Task } from '@/domain/entities'

export interface GetTasksRepository {
  loadTasks: () => Promise<GetTasksRepository.Result>
}

export namespace GetTasksRepository {

  export type Result = Task[]
}
