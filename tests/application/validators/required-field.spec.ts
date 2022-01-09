import { RequiredFieldError } from '@/application/errors'
import { RequiredFieldValidator } from '@/application/validators'

describe('RequiredFieldValidator', () => {
  it('should return RequiredFieldError if field does not have a value', () => {
    const sut = new RequiredFieldValidator('any_field', '')

    const result = sut.validate()

    expect(result).toEqual(new RequiredFieldError('any_field'))
  })

  it('should return undefined if field has a value', () => {
    const sut = new RequiredFieldValidator('any_field', 'any_value')

    const result = sut.validate()

    expect(result).toBeUndefined()
  })
})
