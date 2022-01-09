import { badRequest, HttpResponse, serverError } from '@/application/helpers'
import { ValidatorsComposite, Validator } from '@/application/validators'

export abstract class Controller {
  abstract perform (httpRequest: any): Promise<HttpResponse<any>>
  buildValidators (httpRequest: any): Validator[] {
    return []
  }

  async handle (httpRequest: any): Promise<HttpResponse<any>> {
    const error = this.validate(httpRequest)

    if (error !== undefined) {
      return badRequest(error)
    }
    try {
      return await this.perform(httpRequest)
    } catch (error) {
      return serverError(error as Error)
    }
  }

  private validate (httpRequest: any): Error | undefined {
    const validators = this.buildValidators(httpRequest)
    const validator = new ValidatorsComposite(validators)
    return validator.validate()
  }
}
