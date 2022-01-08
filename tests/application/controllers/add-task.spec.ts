type HttpRequest = {
  title: string
  description: string
  isComplete: boolean
  isFavorite: boolean
}

type HttpResponse = {
  status: number
  data: any
}

class AddTaskController {
  async handle (httpRequest: Partial<HttpRequest>): Promise<HttpResponse> {
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

    const result = await sut.handle({ title: '', description: 'any_description', isComplete: false, isFavorite: false })

    expect(result).toEqual({
      status: 401,
      data: { error: 'Field title is required' }
    })
  })
})
