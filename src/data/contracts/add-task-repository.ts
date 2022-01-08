import { Task } from '@/domain/entities'

export interface AddTaskRepository {
  save: (params: AddTaskRepository.Params) => Promise<AddTaskRepository.Result>
}

export namespace AddTaskRepository {
  export type Params = Task
  export type Result = {
    id: string
  }
}
