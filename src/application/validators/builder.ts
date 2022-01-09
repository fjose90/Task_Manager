import { RequiredFieldValidator } from './required-field'
import { Validator } from './validator'

export class ValidatorsBuilder {
  private readonly validators: Validator[] = []

  private constructor (
    private readonly field: string,
    private readonly value?: string
  ) {}

  static of ({ field, value }: {field: string, value?: string}): ValidatorsBuilder {
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
