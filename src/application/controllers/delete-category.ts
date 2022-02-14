import { DeleteCategory } from '@/domain/features/delete-category'
import { HttpResponse, ok } from '../helpers'
import { RequiredFieldValidator, Validator, ValidatorsBuilder } from '../validators'
import { Controller } from './controller'

type HttpRequest = {
  id?: string
}

type HttpResponseResult = {
  title: string
  description: string
  color: string
}

export class DeleteCategoryController extends Controller {
  constructor (private readonly deleteCategoryService: DeleteCategory) {
    super()
  }

  async perform (httpRequest: HttpRequest): Promise<HttpResponse<Error | HttpResponseResult>> {
    const { id } = httpRequest

    const result = await this.deleteCategoryService.handle({ id: id! })
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
