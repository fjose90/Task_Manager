import { User } from '@/domain/entities'

export interface AddUser {
  handle: (params: AddUser.Params) => Promise<AddUser.Result>
}

export namespace AddUser {
  export type Params = User

  export type Result = {
    id: string
  }
}
