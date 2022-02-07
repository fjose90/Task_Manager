import { UpdateTaskController } from '@/application/controllers'
import { UpdateTaskService } from '@/data/services'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgTaskRepository = new PgTaskRepository()
  const updateTaskService = new UpdateTaskService(pgTaskRepository)
  const controller = new UpdateTaskController(updateTaskService)
  router.put('/tasks', adaptExpressRoute(controller))
}
