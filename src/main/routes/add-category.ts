import { AddCategoryController } from '@/application/controllers'
import { AddCategoryService } from '@/data/services'
import { PgCategoryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCategoryRepository = new PgCategoryRepository()
  const addCategoryService = new AddCategoryService(pgCategoryRepository)
  const controller = new AddCategoryController(addCategoryService)
  router.post('/categories', adaptExpressRoute(controller))
}
