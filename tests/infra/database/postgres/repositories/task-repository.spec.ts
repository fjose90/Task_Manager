import { Task } from '@/domain/entities'
import { PgTask } from '@/infra/database/postgres/entities'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { makeDbConnection } from '@/tests/infra/database/postgres/mocks/connection'
import { getConnection } from 'typeorm'

const mockTask: Task = {
  title: 'any_title',
  description: 'any_description',
  isComplete: false,
  isFavorite: false
}

describe('PgTaskRepository', () => {
  let sut: PgTaskRepository

  beforeAll(async () => {
    await makeDbConnection([PgTask])
  })

  afterAll(async () => {
    await getConnection().close()
  })

  beforeEach(() => {
    sut = new PgTaskRepository()
  })

  it('should create a new Task', async () => {
    const result = await sut.save(mockTask)

    expect(result).toEqual({ id: '1' })
  })
})
