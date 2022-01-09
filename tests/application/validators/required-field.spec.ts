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
    const sut = new RequiredFieldValidator('title', '')

    const result = sut.validate()

    expect(result).toEqual(new RequiredFieldError('title'))
  })
})
