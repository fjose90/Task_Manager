import { User } from '@/domain/entities'
import { GetUsers } from '@/domain/features/get-users'
import { HttpResponse, ok } from '../helpers'
import { Controller } from './controller'

type HttpResponseResult = User

export class GetUsersController extends Controller {
  constructor (private readonly getUsersService: GetUsers) {
    super()
  }

  async perform (): Promise<HttpResponse<Error | HttpResponseResult[]>> {
    const result = await this.getUsersService.handle()
    return ok(result)
  }
}
