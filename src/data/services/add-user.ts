import { AddUser } from '@/domain/features/add-user'
import { AddUserRepository } from '../contracts/add-user-repository'

export class AddUserService implements AddUser {
  constructor (private readonly userRepository: AddUserRepository) {}

  async handle (params: AddUser.Params): Promise<AddUser.Result> {
    return await this.userRepository.save(params)
  }
}
