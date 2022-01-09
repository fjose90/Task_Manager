import { Controller } from '@/application/controllers'
import { ServerError } from '@/application/errors'
import { adaptExpressRoute } from '@/infra/http/express-router'
import { getMockReq, getMockRes } from '@jest-mock/express'
import { mock } from 'jest-mock-extended'
describe('ExpressRouterAdapter', () => {
  it('should call Controller handler with correct params', async () => {
    const request = getMockReq({
      body: {
        any: 'any'
      }
    })

    const { res: response, next } = getMockRes()

    const controllerSpy = mock<Controller>()
    controllerSpy.handle.mockResolvedValueOnce({
      statusCode: 200,
      data: {
        any: 'any'
      }
    })

    const sut = adaptExpressRoute(controllerSpy)

    await sut(request, response, next)

    expect(controllerSpy.handle).toHaveBeenCalledWith({
      any: 'any'
    })
  })

  it('should respond with 400 and valid error', async () => {
    const request = getMockReq({
      body: {
        any: 'any'
      }
    })

    const { res: response, next } = getMockRes()

    const controllerSpy = mock<Controller>()
    controllerSpy.handle.mockResolvedValueOnce({
      statusCode: 400,
      data: new Error('any_error')
    })

    const sut = adaptExpressRoute(controllerSpy)

    await sut(request, response, next)

    expect(response.status).toHaveBeenCalledWith(400)
    expect(response.json).toHaveBeenCalledWith(
      { error: 'any_error' }
    )
  })

  it('should return error if Controller returns status code 500', async () => {
    const request = getMockReq({
      body: {
        any: 'any'
      }
    })

    const { res: response, next } = getMockRes()

    const controllerSpy = mock<Controller>()
    controllerSpy.handle.mockResolvedValueOnce({
      statusCode: 500,
      data: new ServerError()
    })

    const sut = adaptExpressRoute(controllerSpy)

    await sut(request, response, next)

    expect(response.status).toHaveBeenCalledWith(500)
    expect(response.json).toHaveBeenCalledWith({
      error: new ServerError().message
    })
  })
})
