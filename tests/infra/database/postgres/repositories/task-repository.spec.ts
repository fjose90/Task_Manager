import { Task } from '@/domain/entities'
import { PgTask } from '@/infra/database/postgres/entities'
import { PgTaskRepository } from '@/infra/database/postgres/repositories'
import { makeDbConnection } from '@/tests/infra/database/postgres/mocks/connection'

const mockTask: Task = {
  title: 'any_title',
  description: 'any_description',
  isComplete: false,
  isFavorite: false
}

describe('PgTaskRepository', () => {
  it('should create a new Task', async () => {
    await makeDbConnection([PgTask])
    const sut = new PgTaskRepository()

    const result = await sut.save(mockTask)

    expect(result).toEqual({ id: '1' })
  })
})
