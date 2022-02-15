import { UpdateUser } from '@/domain/features/update-user'
import { UpdateUserRepository } from '@/data/contracts/update-user-repository'

export class UpdateUserService implements UpdateUser {
  constructor (private readonly userRepository: UpdateUserRepository) {}

  async handle (params: UpdateUser.Params): Promise<UpdateUser.Result> {
    return await this.userRepository.update(params)
  }
}
