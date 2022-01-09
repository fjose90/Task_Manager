import { RequiredFieldError } from '@/application/errors'
import { Validator } from '@/application/validators'

export class RequiredFieldValidator implements Validator {
  constructor (private readonly fieldName: string, private readonly value?: string) {}

  validate (): Error | undefined {
    if (this.value === '' || this.value === undefined || this.value === null) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}
