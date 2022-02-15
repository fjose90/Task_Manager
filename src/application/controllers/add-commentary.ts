import { AddCommentary } from '@/domain/features/add-commentary'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  task_id?: string
  description?: string
}

type HttpResponseResult = {
  id: string
}

export class AddCommentaryController extends Controller {
  constructor (private readonly addCommentaryService: AddCommentary) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { task_id, description } = httpRequest

    const { id } = await this.addCommentaryService.add({ task_id: task_id!, description: description! })
    return ok({ id })
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['task_id', 'description'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
