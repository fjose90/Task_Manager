import { Category } from '@/domain/entities'
import { GetCategories } from '@/domain/features/get-categories'
import { HttpResponse, ok } from '../helpers'
import { Controller } from './controller'

type HttpResponseResult = Category

export class GetCategoriesController extends Controller {
  constructor (private readonly getCategoriesService: GetCategories) {
    super()
  }

  async perform (): Promise<HttpResponse<Error | HttpResponseResult[]>> {
    const result = await this.getCategoriesService.handle()
    return ok(result)
  }
}
