import { Task } from '@/domain/entities'

export interface UpdateTask {
  handle: (params: UpdateTask.Params) => Promise<UpdateTask.Result>
}

export namespace UpdateTask {
  export type Params = Task & { id: string }

  export type Result = Task & { id: string }

}
