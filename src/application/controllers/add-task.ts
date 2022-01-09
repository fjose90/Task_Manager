import { AddTask } from '@/domain/features/add-task'
import { badRequest, HttpResponse, ok, serverError } from '../helpers'

type HttpRequest = {
  title: string
  description: string
  isComplete: boolean
  isFavorite: boolean
  [key: string]: string | boolean
}

export class AddTaskController {
  constructor (private readonly addTaskService: AddTask) {}

  async handle (httpRequest: Partial<HttpRequest>): Promise<HttpResponse> {
    const requiredFields = ['title', 'description']

    for (const requiredField of requiredFields) {
      if (!httpRequest[requiredField]) {
        return badRequest({
          error: `Field ${requiredField} is required`
        })
      }
    }

    try {
      const { id } = await this.addTaskService.handle({ title: httpRequest.title!, description: httpRequest.description!, isComplete: httpRequest.isComplete!, isFavorite: httpRequest.isFavorite! })
      return ok({ id })
    } catch (error) {
      return serverError()
    }
  }
}
