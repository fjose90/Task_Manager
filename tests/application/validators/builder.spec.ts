import { RequiredFieldValidator, Validator } from '@/application/validators'

export class ValidatorsBuilder {
  private readonly validators: Validator[] = []

  private constructor (
    private readonly field: string,
    private readonly value: string
  ) {}

  static of ({ field, value }: {field: string, value: string}): ValidatorsBuilder {
    return new ValidatorsBuilder(field, value)
  }

  required (): ValidatorsBuilder {
    this.validators.push(new RequiredFieldValidator(this.field, this.value))
    return this
  }

  build (): Validator[] {
    return this.validators
  }
}

describe('ValidatorsBuilder', () => {
  it('should return a RequiredStringValidator', () => {
    const validators = ValidatorsBuilder
      .of({ value: 'any_value', field: 'any_field' })
      .required()
      .build()

    expect(validators).toEqual([new RequiredFieldValidator('any_field', 'any_value')])
  })
})
