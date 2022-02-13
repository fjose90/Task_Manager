import { UpdateCategoryController } from '@/application/controllers'
import { UpdateCategoryService } from '@/data/services'
import { PgCategoryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCategoryRepository = new PgCategoryRepository()
  const updateCategoryService = new UpdateCategoryService(pgCategoryRepository)
  const controller = new UpdateCategoryController(updateCategoryService)
  router.put('/categories', adaptExpressRoute(controller))
}
