import { DeleteTaskController } from '@/application/controllers'
import { DeleteTaskService } from '@/data/services'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgTaskRepository = new PgTaskRepository()
  const deleteTaskService = new DeleteTaskService(pgTaskRepository)
  const controller = new DeleteTaskController(deleteTaskService)
  router.delete('/tasks', adaptExpressRoute(controller))
}
