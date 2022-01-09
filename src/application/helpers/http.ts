
export type HttpResponse = {
  status: number
  data: any
}

export const ok = (data: any): HttpResponse => ({
  status: 200,
  data
})

export const badRequest = (data: any): HttpResponse => ({
  status: 401,
  data
})

export const serverError = (): HttpResponse => ({
  status: 500,
  data: {
    message: 'Internal Server Error'
  }
})
