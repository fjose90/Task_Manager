import { ServerError } from '../errors'

export type HttpResponse<DataType> = {statusCode: number, data: DataType}

export const ok = <DataType = any> (data: DataType): HttpResponse<DataType> => ({
  statusCode: 200,
  data
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error)
})
