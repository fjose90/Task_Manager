import { Task } from '@/domain/entities'

export interface GetTasksRepository {
  loadTasks: (params: GetTasksRepository.Params) => Promise<GetTasksRepository.Result>
}

export namespace GetTasksRepository {
  export type Params = {
    id: string
  }

  export type Result = Task[]
}
