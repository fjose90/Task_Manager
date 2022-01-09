import 'reflect-metadata'
import './config/module-alias'

import { app } from './config/app'
import { config } from './config/env'

app.listen(config.port, () => console.log(`Server running on port : ${config.port}`))
