import { UpdateUser } from '@/domain/features/update-user'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
  name?: string
  email?: string
  phone?: string
}

type HttpResponseResult = {
  id: string
}

export class UpdateUserController extends Controller {
  constructor (private readonly updateUserService: UpdateUser) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id, name, email, phone } = httpRequest

    const result = await this.updateUserService.handle({ id: id!, name: name!, email: email!, phone: phone! })
    return ok(result)
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['id', 'name', 'email', 'phone'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
