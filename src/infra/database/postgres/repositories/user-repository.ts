import { getRepository } from 'typeorm'
import { AddUserRepository, DeleteUserRepository, GetUsersRepository, UpdateUserRepository } from '@/data/contracts'
import { User } from '@/domain/entities'
import { PgUser } from '@/infra/database/postgres/entities'

export class PgUserRepository {
  async save (user: User): Promise<AddUserRepository.Result> {
    const pgUserRepository = getRepository(PgUser)

    const { id } = await pgUserRepository.save(user)
    return { id: id.toString() }
  }

  async loadUsers (): Promise<GetUsersRepository.Result> {
    const pgUserRepository = getRepository(PgUser)

    const pgResult = await pgUserRepository.find()

    return pgResult
  }

  async delete (params: DeleteUserRepository.Params): Promise<DeleteUserRepository.Result> {
    const pgUserRepository = getRepository(PgUser)
    const result = await pgUserRepository.delete(params.id)
    return result.raw
  }

  async update ({ id, name, email, phone }: UpdateUserRepository.Params): Promise<UpdateUserRepository.Result> {
    const pgUserRepository = getRepository(PgUser)
    const userToUpdate = { name, email, phone }
    await pgUserRepository.update(id, userToUpdate)
    return { ...userToUpdate, id }
  }
}
