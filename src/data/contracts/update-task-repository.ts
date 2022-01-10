import { Task } from '@/domain/entities'

export interface UpdateTaskRepository {
  update: (params: UpdateTaskRepository.Params) => Promise<UpdateTaskRepository.Result>
}

export namespace UpdateTaskRepository {
  export type Params = Task & { id: string }

  export type Result = Task & { id: string }
}
