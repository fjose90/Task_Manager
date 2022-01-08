import { Task } from '@/domain/entities'

export interface AddTask {
  handle: (params: AddTask.Params) => Promise<AddTask.Result>
}

export namespace AddTask {
  export type Params = Task

  export type Result = {
    id: string
  }
}
