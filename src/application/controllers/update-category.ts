import { UpdateCategory } from '@/domain/features/update-category'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
  title?: string
  description?: string
  color?: string
}

type HttpResponseResult = {
  id: string
}

export class UpdateCategoryController extends Controller {
  constructor (private readonly updateCategoryService: UpdateCategory) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id, title, description, color } = httpRequest

    const result = await this.updateCategoryService.handle({ id: id!, title: title!, description: description!, color: color! })
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
