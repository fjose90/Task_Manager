import { DeleteTask } from '@/domain/features/delete-task'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
}

type HttpResponseResult = {
  title: string
  description: string
  isComplete: boolean
  isFavorite: boolean
}

export class DeleteTaskController extends Controller {
  constructor (private readonly deleteTaskService: DeleteTask) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id } = httpRequest

    const result = await this.deleteTaskService.handle({ id: id! })
    return ok(result)
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['id'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
