import { User } from '@/domain/entities/user'
import { GetUsersRepository } from '@/data/contracts/get-users-repository'
import { GetUsersService } from '@/data/services/get-users'
import { mock, MockProxy } from 'jest-mock-extended'

const mockedUsers: User[] = [{
  name: 'any name',
  email: 'any_email@email.com',
  phone: '849998888'
},
{
  name: 'any name2',
  email: 'any_email2@email.com',
  phone: '849997777'
}]

describe('GetTasksService', () => {
  let userRepositoryMock: MockProxy<GetUsersRepository>
  let sut: GetUsersService

  beforeAll(() => {
    userRepositoryMock = mock<GetUsersRepository>()
    userRepositoryMock.loadUsers.mockResolvedValue(mockedUsers)
  })

  beforeEach(() => {
    sut = new GetUsersService(userRepositoryMock)
  })

  it('should return users array if GetUsersRepository succeeds', async () => {
    const result = await sut.handle()
    expect(result).toEqual(mockedUsers)
  })
})
