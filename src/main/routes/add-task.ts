import { Router } from 'express'

export default (router: Router): void => {
  router.get('/', (request, response) => {
    response.send({ message: 'Its workingg' })
  })
}
