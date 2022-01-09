import { AddTaskController } from '@/application/controllers'
import { AddTask } from '@/domain/features/add-task'
import { mock } from 'jest-mock-extended'

describe('AddTaskController', () => {
  it('should return 401 if task title is not defined in request', async () => {
    const addTaskSpy = mock<AddTask>()
    const sut = new AddTaskController(addTaskSpy)
    const result = await sut.handle({ description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({
      status: 401,
      data: { error: 'Field title is required' }
    })
  })

  it('should return 401 if task description is not defined in request', async () => {
    const addTaskSpy = mock<AddTask>()
    const sut = new AddTaskController(addTaskSpy)
    const result = await sut.handle({ title: 'any_title', isComplete: false, isFavorite: false })

    expect(result).toEqual({
      status: 401,
      data: { error: 'Field description is required' }
    })
  })

  it('should call AddTask with correct params', async () => {
    const addTaskSpy = mock<AddTask>()
    const sut = new AddTaskController(addTaskSpy)
    addTaskSpy.handle.mockResolvedValueOnce({
      id: 'any_id'
    })

    await sut.handle({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })

    expect(addTaskSpy.handle).toHaveBeenCalledWith({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })
  })

  it('should return status code 200 with task id if AddTask completes successfully', async () => {
    const addTaskSpy = mock<AddTask>()
    addTaskSpy.handle.mockResolvedValueOnce({
      id: 'any_id'
    })
    const sut = new AddTaskController(addTaskSpy)

    const result = await sut.handle({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({ status: 200, data: { id: 'any_id' } })
  })

  it('should return status code 500 with internal error if AddTask throws', async () => {
    const addTaskSpy = mock<AddTask>()
    addTaskSpy.handle.mockRejectedValueOnce(new Error(''))
    const sut = new AddTaskController(addTaskSpy)

    const result = await sut.handle({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({ status: 500, data: { message: 'Internal Server Error' } })
  })
})
