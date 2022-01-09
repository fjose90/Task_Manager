import { Task } from '@/domain/entities'

export interface GetTasks {
  handle: () => Promise<GetTasks.Result>
}

export namespace GetTasks {

  export type Result = Task[]

}
