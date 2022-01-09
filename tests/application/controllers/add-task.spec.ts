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

    await this.addTaskService.handle({ title: httpRequest.title!, description: httpRequest.description!, isComplete: httpRequest.isComplete!, isFavorite: httpRequest.isFavorite! })

    return {
      status: 401,
      data: {
        error: 'Field title is required'
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

    await sut.handle({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })

    expect(addTaskSpy.handle).toHaveBeenCalledWith({ title: 'any_title', description: 'any_description', isComplete: false, isFavorite: false })
  })
})
