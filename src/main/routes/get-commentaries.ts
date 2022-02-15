import { GetCommentariesController } from '@/application/controllers'
import { GetCommentariesService } from '@/data/services'
import { PgCommentaryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCategoryRepository = new PgCommentaryRepository()
  const getCommentariesService = new GetCommentariesService(pgCategoryRepository)
  const controller = new GetCommentariesController(getCommentariesService)
  router.get('/commentaries', adaptExpressRoute(controller))
}
