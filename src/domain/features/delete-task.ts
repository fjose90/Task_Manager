import { Task } from '@/domain/entities'

export interface DeleteTask {
  handle: (params: DeleteTask.Params) => Promise<DeleteTask.Result>
}

export namespace DeleteTask {
  export type Params = {
    id: string
  }

  export type Result = Task
}
