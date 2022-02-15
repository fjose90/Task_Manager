import { GetUsersController } from '@/application/controllers'
import { GetUsers } from '@/domain/features/get-users'
import { mock, MockProxy } from 'jest-mock-extended'

describe('GetUsersController', () => {
  let getUsersSpy: MockProxy<GetUsers>
  let sut: GetUsersController

  beforeAll(() => {
    getUsersSpy = mock<GetUsers>()
  })

  beforeEach(() => {
    sut = new GetUsersController(getUsersSpy)
  })

  it('should return status code 200 if GetUsers completes succesfully', async () => {
    const mockedUsers = [
      { name: 'any_name', email: 'any_email', phone: 'any_phone' },
      { name: 'any_name2', email: 'any_email2', phone: 'any_phone2' }]
    getUsersSpy.handle.mockResolvedValue(mockedUsers)

    const result = await sut.handle({})
    expect(result.statusCode).toBe(200)
    expect(result).toEqual({
      statusCode: 200,
      data: mockedUsers
    })
  })
})
