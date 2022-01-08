import { Task } from '@/domain/entities'
import { Column, Entity, getRepository, PrimaryGeneratedColumn } from 'typeorm'
import { makeDbConnection } from '@/tests/infra/database/postgres/mocks/connection'
import { AddTaskRepository } from '@/data/contracts'

@Entity({ name: 'Task' })
class PgTask {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  title!: string

  @Column()
  description!: string

  @Column({ type: 'boolean' })
  isFavorite!: boolean

  @Column({ type: 'boolean' })
  isComplete!: boolean
}

class PgTaskRepository {
  async save (task: Task): Promise<AddTaskRepository.Result> {
    const pgTaskRepository = getRepository(PgTask)

    const { id } = await pgTaskRepository.save(task)
    return { id: id.toString() }
  }
}

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
