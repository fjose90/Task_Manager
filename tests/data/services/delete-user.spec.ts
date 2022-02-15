import { DeleteUserRepository } from '@/data/contracts/delete-user-repository'
import { DeleteUserService } from '@/data/services/delete-user'
import { User } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockUser: User = {
  name: 'any name',
  email: 'any_email@email.com',
  phone: '849998888'
}

describe('DeleteUserService', () => {
  let userRepositorySpy: MockProxy<DeleteUserRepository>
  let sut: DeleteUserService

  beforeAll(() => {
    userRepositorySpy = mock<DeleteUserRepository>()
    userRepositorySpy.delete.mockResolvedValue(mockUser)
  })

  beforeEach(() => {
    sut = new DeleteUserService(userRepositorySpy)
  })

  it('should delete a user correctly', async () => {
    const result = await sut.handle({ ...mockUser, id: '1' })
    expect(result).toEqual(mockUser)
  })
  it('should call DeleteTaskRepository with correct params', async () => {
    await DeleteUserService
    expect(userRepositorySpy.delete)
  })
})
