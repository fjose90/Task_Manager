import { GetUsers } from '@/domain/features/get-users'
import { GetUsersRepository } from '@/data/contracts/get-users-repository'

export class GetUsersService implements GetUsers {
  constructor (private readonly userRepository: GetUsersRepository) {}

  async handle (): Promise<GetUsers.Result> {
    return await this.userRepository.loadUsers()
  }
}
