import { AddTask } from '@/domain/features/add-task'
import { mock } from 'jest-mock-extended'

type HttpRequest = {
  title: string
  description: string
  isComplete: boolean
  isFavorite: boolean
  [key: string]: string | boolean
}

type HttpResponse = {
  status: number
  data: any
}

class AddTaskController {
  constructor (private readonly addTaskService: AddTask) {}

  async handle (httpRequest: Partial<HttpRequest>): Promise<HttpResponse> {
    const requiredFields = ['title', 'description']

    for (const requiredField of requiredFields) {
      if (!httpRequest[requiredField]) {
        return {
          status: 401,
          data: {
            error: `Field ${requiredField} is required`
          }
        }
      }
    }

    try {
      const { id } = await this.addTaskService.handle({ title: httpRequest.title!, description: httpRequest.description!, isComplete: httpRequest.isComplete!, isFavorite: httpRequest.isFavorite! })
      return {
        status: 200,
        data: {
          id
        }
      }
    } catch (error) {
      return {
        status: 500,
        data: {
          message: (error as Error).message
        }
      }
    }
  }
}
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
    addTaskSpy.handle.mockRejectedValueOnce(new Error('any_error'))
    const sut = new AddTaskController(addTaskSpy)

    const result = await sut.handle({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({ status: 500, data: { message: 'any_error' } })
  })
})
