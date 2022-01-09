class RequiredFieldError extends Error {
  constructor (fieldName: string) {
    super(`Field ${fieldName} is required`)
    this.name = 'RequiredFieldError'
  }
}

class RequiredFieldValidator {
  constructor (private readonly fieldName: string, private readonly value: string) {}

  validate (): Error | undefined {
    if (this.value === '' || this.value === undefined || this.value === null) {
      return new RequiredFieldError(this.fieldName)
    }
  }
}

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
