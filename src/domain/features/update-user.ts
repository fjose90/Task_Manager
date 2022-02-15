import { User } from '@/domain/entities'

export interface UpdateUser {
  handle: (params: UpdateUser.Params) => Promise<UpdateUser.Result>
}

export namespace UpdateUser {
  export type Params = User & { id: string }

  export type Result = User & { id: string }
}
