import { User } from '@/domain/entities'

export interface GetUsersRepository {
  loadUsers: () => Promise<GetUsersRepository.Result>
}

export namespace GetUsersRepository {

  export type Result = User[]
}
