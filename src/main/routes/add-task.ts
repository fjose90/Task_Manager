import { AddTaskController } from '@/application/controllers'
import { AddTaskService } from '@/data/services'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgTaskRepository = new PgTaskRepository()
  const addTaskService = new AddTaskService(pgTaskRepository)
  const controller = new AddTaskController(addTaskService)
  router.post('/tasks', adaptExpressRoute(controller))
}
