import { DeleteUser } from '@/domain/features/delete-user'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
}

type HttpResponseResult = {
  name: string
  email: string
  phone: string
}

export class DeleteUserController extends Controller {
  constructor (private readonly deleteUserService: DeleteUser) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id } = httpRequest

    const result = await this.deleteUserService.handle({ id: id! })
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
