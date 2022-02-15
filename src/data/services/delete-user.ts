import { DeleteUser } from '@/domain/features/delete-user'
import { DeleteUserRepository } from '@/data/contracts/delete-user-repository'

export class DeleteUserService implements DeleteUser {
  constructor (private readonly userRepository: DeleteUserRepository) {}

  async handle (params: DeleteUser.Params): Promise<DeleteUser.Result> {
    return await this.userRepository.delete(params)
  }
}
