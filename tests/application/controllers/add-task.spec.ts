type HttpRequest = {
  title: string
  description: string
  isComplete: boolean
  isFavorite: boolean
  [key: string]: string | boolean
}

type HttpResponse = {
  status: number
  data: any
}

class AddTaskController {
  async handle (httpRequest: Partial<HttpRequest>): Promise<HttpResponse> {
    const requiredFields = ['title', 'description']

    for (const requiredField of requiredFields) {
      if (!httpRequest[requiredField]) {
        return {
          status: 401,
          data: {
            error: `Field ${requiredField} is required`
          }
        }
      }
    }

    return {
      status: 401,
      data: {
        error: 'Field title is required'
      }
    }
  }
}
describe('AddTaskController', () => {
  it('should return 401 if task title is not defined in request', async () => {
    const sut = new AddTaskController()

    const result = await sut.handle({ description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({
      status: 401,
      data: { error: 'Field title is required' }
    })
  })

  it('should return 401 if task description is not defined in request', async () => {
    const sut = new AddTaskController()

    const result = await sut.handle({ title: 'any_title', isComplete: false, isFavorite: false })

    expect(result).toEqual({
      status: 401,
      data: { error: 'Field description is required' }
    })
  })
})
