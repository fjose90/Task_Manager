import { Commentary } from '@/domain/entities'
import { GetCommentaries } from '@/domain/features/get-commentaries'
import { HttpResponse, ok } from '../helpers'
import { Controller } from './controller'

type HttpResponseResult = Commentary

export class GetCommentariesController extends Controller {
  constructor (private readonly getCommentariesService: GetCommentaries) {
    super()
  }

  async perform (): Promise<HttpResponse<Error | HttpResponseResult[]>> {
    const result = await this.getCommentariesService.handle()
    return ok(result)
  }
}
