import { RequiredFieldError } from '@/application/errors'
import { RequiredFieldValidator, ValidatorsComposite } from '@/application/validators'

describe('ValidatorsComposite', () => {
  it('should return the first error it encounters', () => {
    const firstValidator = new RequiredFieldValidator('any_field', '')
    const secondValidator = new RequiredFieldValidator('any_field_2', 'any_value')

    const sut = new ValidatorsComposite([firstValidator, secondValidator])

    const error = sut.validate()

    expect(error).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if all validators passes', () => {
    const firstValidator = new RequiredFieldValidator('any_field', 'any_value')
    const secondValidator = new RequiredFieldValidator('any_field_2', 'any_value')

    const sut = new ValidatorsComposite([firstValidator, secondValidator])

    const error = sut.validate()

    expect(error).toBeUndefined()
  })
})
