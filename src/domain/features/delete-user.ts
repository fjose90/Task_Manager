import { User } from '@/domain/entities'

export interface DeleteUser {
  handle: (params: DeleteUser.Params) => Promise<DeleteUser.Result>
}

export namespace DeleteUser {
  export type Params = {
    id: string
  }

  export type Result = User
}
