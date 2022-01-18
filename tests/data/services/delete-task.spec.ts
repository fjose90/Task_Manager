import { DeleteTaskRepository } from '@/data/contracts'
import { DeleteTaskService } from '@/data/services'
import { mock, MockProxy } from 'jest-mock-extended'

describe('DeleteTaskService', () => {
  let taskRepositorySpy: MockProxy<DeleteTaskRepository>

  beforeAll(() => {
    taskRepositorySpy = mock<DeleteTaskRepository>()
    taskRepositorySpy.delete.mockClear()
  })

  it('should call DeleteTaskRepository with correct params', async () => {
    await DeleteTaskService

    expect(taskRepositorySpy.delete)
  })

  it('should call Throws if DeleteTaskRepository throws', async () => {
    taskRepositorySpy.delete.mockRejectedValueOnce(() => {
      throw new Error('any_error')
    })
  })
})
