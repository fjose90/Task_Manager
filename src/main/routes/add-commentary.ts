import { AddCommentaryController } from '@/application/controllers'
import { AddCommentaryService } from '@/data/services'
import { PgCommentaryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCommentaryRepository = new PgCommentaryRepository()
  const addCommentaryService = new AddCommentaryService(pgCommentaryRepository)
  const controller = new AddCommentaryController(addCommentaryService)
  router.post('/commentaries', adaptExpressRoute(controller))
}
