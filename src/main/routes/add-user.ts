import { AddUserController } from '@/application/controllers'
import { AddUserService } from '@/data/services'
import { PgUserRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgUserRepository = new PgUserRepository()
  const addUserService = new AddUserService(pgUserRepository)
  const controller = new AddUserController(addUserService)
  router.post('/users', adaptExpressRoute(controller))
}
