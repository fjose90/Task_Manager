import { AddTask } from '@/domain/features/add-task'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  title?: string
  description?: string
  isComplete?: boolean
  isFavorite?: boolean
}

type HttpResponseResult = {
  id: string
}

export class AddTaskController extends Controller {
  constructor (private readonly addTaskService: AddTask) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { title, description, isComplete = false, isFavorite = false } = httpRequest

    const { id } = await this.addTaskService.handle({ title: title!, description: description!, isComplete, isFavorite })
    return ok({ id })
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['title', 'description'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
