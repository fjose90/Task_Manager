import { User } from '@/domain/entities'

export interface UpdateUserRepository {
  update: (params: UpdateUserRepository.Params) => Promise<UpdateUserRepository.Result>
}

export namespace UpdateUserRepository {
  export type Params = User & { id: string }

  export type Result = User & { id: string }
}
