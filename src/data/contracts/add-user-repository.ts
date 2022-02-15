import { User } from '@/domain/entities'

export interface AddUserRepository {
  save: (params: AddUserRepository.Params) => Promise<AddUserRepository.Result>
}

export namespace AddUserRepository {
  export type Params = User
  export type Result = {
    id: string
  }
}
