import { UpdateTask } from '@/domain/features/update-tasks'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
  title?: string
  description?: string
  isComplete?: boolean
  isFavorite?: boolean
}

type HttpResponseResult = {
  id: string
}

export class UpdateTaskController extends Controller {
  constructor (private readonly updateTaskService: UpdateTask) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id, title, description, isComplete = false, isFavorite = false } = httpRequest

    const result = await this.updateTaskService.handle({ id: id!, title: title!, description: description!, isComplete, isFavorite })
    return ok(result)
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['id', 'title', 'description'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
