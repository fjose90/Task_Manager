import { RequiredFieldValidator, ValidatorsBuilder } from '@/application/validators'

describe('ValidatorsBuilder', () => {
  it('should return a RequiredFieldValidator', () => {
    const validators = ValidatorsBuilder
      .of({ value: 'any_value', field: 'any_field' })
      .required()
      .build()

    expect(validators).toEqual([new RequiredFieldValidator('any_field', 'any_value')])
  })
})
