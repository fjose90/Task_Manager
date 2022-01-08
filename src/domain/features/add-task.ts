import { Task } from '@/domain/entities'

interface AddTask {
  handle: (params: AddTask.Params) => Promise<AddTask.Result>
}

export namespace AddTask {
  export type Params = Task

  export type Result = boolean
}
