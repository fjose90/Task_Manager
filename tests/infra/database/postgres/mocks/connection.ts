import { newDb, IMemoryDb } from 'pg-mem'

export const makeDbConnection = async (entities?: any[]): Promise<IMemoryDb> => {
  const db = newDb()
  const connection = await db.adapters.createTypeormConnection({
    type: 'postgres',
    entities: entities ?? ['src/infra/postgres/entities/index.js']
  })

  await connection.synchronize()

  return db
}
