import { AddUser } from '@/domain/features/add-user'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  name?: string
  email?: string
  phone?: string
}

type HttpResponseResult = {
  id: string
}

export class AddUserController extends Controller {
  constructor (private readonly addUserService: AddUser) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { name, email, phone } = httpRequest

    const { id } = await this.addUserService.handle({ name: name!, email: email!, phone: phone! })
    return ok({ id })
  }

  buildValidators (httpRequest: HttpRequest): Validator[] {
    const requiredFields = ['name', 'email', 'phone'] as const
    const validators = []

    for (const requiredField of requiredFields) {
      ValidatorsBuilder.of({ field: requiredField, value: httpRequest[requiredField] }).required().build()
      validators.push(new RequiredFieldValidator(requiredField, httpRequest[requiredField]))
    }

    return validators
  }
}
