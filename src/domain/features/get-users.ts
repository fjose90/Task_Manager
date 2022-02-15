import { User } from '@/domain/entities'

export interface GetUsers {
  handle: () => Promise<GetUsers.Result>
}

export namespace GetUsers {

  export type Result = User[]

}
