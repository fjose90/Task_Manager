import { DeleteCommentaryController } from '@/application/controllers'
import { DeleteCommentaryService } from '@/data/services'
import { PgCommentaryRepository } from '@/infra/database/postgres/repositories'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { Router } from 'express'

export default (router: Router): void => {
  const pgCommentaryRepository = new PgCommentaryRepository()
  const deleteCommentaryService = new DeleteCommentaryService(pgCommentaryRepository)
  const controller = new DeleteCommentaryController(deleteCommentaryService)
  router.delete('/commentaries', adaptExpressRoute(controller))
}
