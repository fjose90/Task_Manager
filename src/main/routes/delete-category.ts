import { DeleteCategoryController } from '@/application/controllers'
import { DeleteCategoryService } from '@/data/services'
import { PgCategoryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCategoryRepository = new PgCategoryRepository()
  const deleteCategoryService = new DeleteCategoryService(pgCategoryRepository)
  const controller = new DeleteCategoryController(deleteCategoryService)
  router.delete('/categories', adaptExpressRoute(controller))
}
