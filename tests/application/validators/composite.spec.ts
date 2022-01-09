import { RequiredFieldError } from '@/application/errors'
import { RequiredFieldValidator, Validator } from '@/application/validators'

class ValidatorsComposite implements Validator {
  constructor (private readonly validators: Validator[]) {}

  validate (): Error | undefined {
    for (const validator of this.validators) {
      const error = validator.validate()

      if (error !== undefined) {
        return error
      }
    }
  }
}

describe('ValidatorsComposite', () => {
  it('should return the first error it encounters', () => {
    const firstValidator = new RequiredFieldValidator('any_field', '')
    const secondValidator = new RequiredFieldValidator('any_field_2', 'any_value')

    const sut = new ValidatorsComposite([firstValidator, secondValidator])

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })
})
