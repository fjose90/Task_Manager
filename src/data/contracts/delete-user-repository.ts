import { User } from '@/domain/entities'

export interface DeleteUserRepository {
  delete: (params: DeleteUserRepository.Params) => Promise<DeleteUserRepository.Result>
}

export namespace DeleteUserRepository {
  export type Params = {id: string}
  export type Result = User
}
