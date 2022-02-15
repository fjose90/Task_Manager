import { GetUsersController } from '@/application/controllers'
import { GetUsersService } from '@/data/services'
import { PgUserRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgUserRepository = new PgUserRepository()
  const getUsersService = new GetUsersService(pgUserRepository)
  const controller = new GetUsersController(getUsersService)
  router.get('/users', adaptExpressRoute(controller))
}
