import { AddCategory } from '@/domain/features/add-category'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  title?: string
  description?: string
  color?: string
}

type HttpResponseResult = {
  id: string
}

export class AddCategoryController extends Controller {
  constructor (private readonly addCategoryService: AddCategory) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { title, description, color } = httpRequest

    const { id } = await this.addCategoryService.handle({ title: title!, description: description!, color: color! })
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
