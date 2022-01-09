import { AddTask } from '@/domain/features/add-task'

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

export class AddTaskController {
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
