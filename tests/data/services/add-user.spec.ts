import { AddUserRepository } from '@/data/contracts/add-user-repository'
import { AddUserService } from '@/data/services/add-user'
import { User } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockUser: User = {
  name: 'any name',
  email: 'any_email@email.com',
  phone: '849998888'
}

describe('AddUserService', () => {
  let userRepositorySpy: MockProxy<AddUserRepository>
  let sut: AddUserService

  beforeAll(() => {
    userRepositorySpy = mock<AddUserRepository>()
    userRepositorySpy.save.mockResolvedValue({
      id: '1'
    })
  })

  beforeEach(() => {
    sut = new AddUserService(userRepositorySpy)
  })

  it('should return user id if AddUserRepository succeeds', async () => {
    const result = await sut.handle(mockUser)
    expect(result).toEqual({
      id: '1'
    })
  })
})
