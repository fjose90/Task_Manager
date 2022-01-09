export class RequiredFieldError extends Error {
  constructor (fieldName: string) {
    super(`Field ${fieldName} is required`)
    this.name = 'RequiredFieldError'
  }
}
