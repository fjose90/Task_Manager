// import { GetTasksRepository } from '@/data/contracts'
import { Commentary, Task } from '@/domain/entities'
import { PgCommentary, PgTask } from '@/infra/database/postgres/entities'
import { PgCommentaryRepository, PgTaskRepository } from '@/infra/database/postgres/repositories'
import { makeDbConnection } from '@/tests/infra/database/postgres/mocks/connection'
import { getConnection } from 'typeorm'

const mockTask: Task = {
  title: 'any_title',
  description: 'any_description',
  isComplete: false,
  isFavorite: false
}

describe('PgCommentaryRepository', () => {
  let sut: PgCommentaryRepository
  let pgTaskRepository: PgTaskRepository
  beforeAll(async () => {
    await makeDbConnection([PgTask, PgCommentary])
  })

  afterAll(async () => {
    await getConnection().close()
  })

  beforeEach(() => {
    pgTaskRepository = new PgTaskRepository()
    sut = new PgCommentaryRepository()
  })

  it('should create a new Task', async () => {
    const { id } = await pgTaskRepository.save(mockTask)

    const mockComment: Commentary = {
      description: 'Hello',
      task_id: id
    }

    const result = await sut.save(mockComment)

    expect(result).toEqual({ id: '1' })
  })

  it('should retrieve a comments by a task id', async () => {
    const result = await sut.loadCommentaries()

    expect(result.length).toBe(1)
    expect(result[0]).toEqual({ task_id: '1', description: 'Hello' })
  })

  it('should delete a commentary on a task', async () => {
    await sut.deleteById({ id: '1' })

    const result = await sut.loadCommentaries()

    expect(result.length).toBe(0)
  })
})
