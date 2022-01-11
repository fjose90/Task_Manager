import { DeleteTaskController } from '@/application/controllers'
import { DeleteTask } from '@/domain/features/delete-task'
import { mock, MockProxy } from 'jest-mock-extended'

describe('DeleteTaskController', () => {
  let deleteTaskSpy: MockProxy<DeleteTask>
  let sut: DeleteTaskController

  beforeAll(() => {
    deleteTaskSpy = mock<DeleteTask>()
  })

  beforeEach(() => {
    sut = new DeleteTaskController(deleteTaskSpy)
  })

  it('should return 200 if task description is not defined in request', async () => {
    const result = await sut.handle({ id: 'any_id' })

    expect(result).toEqual({
      statusCode: 200
    })
  })
})
