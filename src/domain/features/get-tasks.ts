import { Task } from '@/domain/entities'

export interface GetTasks {
  handle: (params: GetTasks.Params) => Promise<GetTasks.Result>
}

export namespace GetTasks {
  export type Params = {
    id: string
  }

  export type Result = Task[]

}
