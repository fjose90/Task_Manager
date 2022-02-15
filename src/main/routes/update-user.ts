import { UpdateUserController } from '@/application/controllers'
import { UpdateUserService } from '@/data/services'
import { PgUserRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgUserRepository = new PgUserRepository()
  const updateUserService = new UpdateUserService(pgUserRepository)
  const controller = new UpdateUserController(updateUserService)
  router.put('/users', adaptExpressRoute(controller))
}
