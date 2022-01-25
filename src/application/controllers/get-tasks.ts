import { Task } from '@/domain/entities'
import { GetTasks } from '@/domain/features/get-tasks'
import { HttpResponse, ok } from '../helpers'
import { Controller } from './controller'

type HttpResponseResult = Task

export class GetTasksController extends Controller {
  constructor (private readonly getTasksService: GetTasks) {
    super()
  }

  async perform (): Promise<HttpResponse<Error | HttpResponseResult[]>> {
    const result = await this.getTasksService.handle()
    return ok(result)
  }
}
