import { DeleteUserController } from '@/application/controllers'
import { DeleteUserService } from '@/data/services'
import { PgUserRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgUserRepository = new PgUserRepository()
  const deleteUserService = new DeleteUserService(pgUserRepository)
  const controller = new DeleteUserController(deleteUserService)
  router.delete('/users', adaptExpressRoute(controller))
}
