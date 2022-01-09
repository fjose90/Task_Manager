const isProductionEnviroment = process.env.NODE_ENV === 'production'

export const config = {
  port: process.env.PORT ?? 8080,

  isProductionEnviroment
}
