import { AddUserController } from '@/application/controllers'
import { RequiredFieldError } from '@/application/errors'
import { AddUser } from '@/domain/features/add-user'
import { mock, MockProxy } from 'jest-mock-extended'

describe('AddUserController', () => {
  let addUserSpy: MockProxy<AddUser>
  let sut: AddUserController

  beforeAll(() => {
    addUserSpy = mock<AddUser>()
  })

  beforeEach(() => {
    sut = new AddUserController(addUserSpy)
  })

  it('should return 400 if user name not defined in request', async () => {
    const result = await sut.handle({ email: 'any email', phone: '999988877' })
    expect(result).toEqual({
      statusCode: 400,
      data: new RequiredFieldError('name')
    })
  })

  it('should return 400 if user email is not defined in request', async () => {
    const result = await sut.handle({ name: 'any_title', phone: '999988877' })

    expect(result).toEqual({
      statusCode: 400,
      data: new RequiredFieldError('email')
    })
  })

  it('should AddUser with correct params', async () => {
    addUserSpy.handle.mockResolvedValue({
      id: 'any_id'
    })

    await sut.handle({ name: 'any_name', email: 'any_email', phone: '999988877' })
    expect(addUserSpy.handle).toHaveBeenCalledWith({ name: 'any_name', email: 'any_email', phone: '999988877' })
  })

  it('should return status code 200 with user id if AddUser completes succesfully', async () => {
    addUserSpy.handle.mockResolvedValue({
      id: 'any_id'
    })

    const result = await sut.handle({ name: 'any_name', email: 'any_email', phone: '999988877' })
    expect(result).toEqual({
      statusCode: 200,
      data: { id: 'any_id' }
    })
  })
})
