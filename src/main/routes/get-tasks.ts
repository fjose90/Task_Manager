import { GetTasksController } from '@/application/controllers'
import { GetTasksService } from '@/data/services'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgTaskRepository = new PgTaskRepository()
  const getTasksService = new GetTasksService(pgTaskRepository)
  const controller = new GetTasksController(getTasksService)
  router.get('/tasks', adaptExpressRoute(controller))
}
