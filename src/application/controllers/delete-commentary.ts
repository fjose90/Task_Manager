import { DeleteCommentary } from '@/domain/features/delete-commentary'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
}

export class DeleteCommentaryController extends Controller {
  constructor (private readonly deleteCommentaryService: DeleteCommentary) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | { message: string}>> {
    const { id } = httpRequest

    await this.deleteCommentaryService.handle({ id: id! })
    return ok({ message: 'success' })
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
