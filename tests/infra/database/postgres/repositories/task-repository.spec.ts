// import { GetTasksRepository } from '@/data/contracts'
import { Task } from '@/domain/entities'
import { PgCommentary, PgTask } from '@/infra/database/postgres/entities'
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
    await makeDbConnection([PgTask, PgCommentary])
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

  it('should update a existent task', async () => {
    const result = await sut.update({ id: '1', title: 'any title', description: 'any description', isFavorite: false, isComplete: false })

    expect(result).toEqual({ id: '1', title: 'any title', description: 'any description', isFavorite: false, isComplete: false })
  })
})
