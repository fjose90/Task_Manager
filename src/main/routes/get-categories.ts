import { GetCategoriesController } from '@/application/controllers'
import { GetCategoriesService } from '@/data/services'
import { PgCategoryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCategoryRepository = new PgCategoryRepository()
  const getCategoriesService = new GetCategoriesService(pgCategoryRepository)
  const controller = new GetCategoriesController(getCategoriesService)
  router.get('/categories', adaptExpressRoute(controller))
}
