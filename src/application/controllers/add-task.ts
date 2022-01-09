import { AddTask } from '@/domain/features/add-task'
import { badRequest, HttpResponse, ok, serverError } from '../helpers'
import { RequiredFieldValidator, ValidatorsComposite } from '../validators'

type HttpRequest = {
  title?: string
  description?: string
  isComplete?: boolean
  isFavorite?: boolean
}

type HttpResponseResult = {
  id: string
}

export class AddTaskController {
  constructor (private readonly addTaskService: AddTask) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    try {
      const error = this.validate(httpRequest)

      if (error !== undefined) {
        return badRequest(error)
      }

      const { title, description, isComplete = false, isFavorite = false } = httpRequest

      const { id } = await this.addTaskService.handle({ title: title!, description: description!, isComplete, isFavorite })
      return ok({ id })
    } catch (error) {
      return serverError(error as Error)
    }
  }

  private validate (httpRequest: HttpRequest): Error | undefined {
    const requiredFields = ['title', 'description'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return new ValidatorsComposite(validators).validate()
  }
}
