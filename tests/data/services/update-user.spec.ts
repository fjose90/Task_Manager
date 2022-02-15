import { UpdateUserRepository } from '@/data/contracts/update-user-repository'
import { UpdateUserService } from '@/data/services/update-user'
import { User } from '@/domain/entities'
import { mock, MockProxy } from 'jest-mock-extended'

const mockUser: User = {
  name: 'any name',
  email: 'any_email@email.com',
  phone: '849998888'
}

describe('UpdateUserService', () => {
  let userRepositorySpy: MockProxy<UpdateUserRepository>
  let sut: UpdateUserService

  beforeAll(() => {
    userRepositorySpy = mock<UpdateUserRepository>()
    userRepositorySpy.update.mockResolvedValue({ ...mockUser, id: '1' })
  })

  beforeEach(() => {
    sut = new UpdateUserService(userRepositorySpy)
  })

  it('should update a existent user', async () => {
    const result = await sut.handle({ ...mockUser, id: '1' })
    expect({ ...mockUser, id: '1' }).toEqual({ ...result })
  })
})
