import { addAlias } from 'module-alias'
import { resolve } from 'path'
import { config } from './env'

const resolveTo = config.isProductionEnviroment ? 'build' : 'src'

addAlias('@', resolve(resolveTo))
