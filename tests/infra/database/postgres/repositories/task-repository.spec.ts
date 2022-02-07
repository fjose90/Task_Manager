// import { GetTasksRepository } from '@/data/contracts'
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

// const mockedTasks: Task[] = [{
//   title: 'Encher garrafa de água',
//   description: 'Para tomar 2l de água por dia preciso me lembrar de encher a garrafa',
//   isComplete: false,
//   isFavorite: false
// },
// {
//   title: 'Terminar tarefa da faculdade',
//   description: 'Finalizar tarefa da matéria de testes de software',
//   isComplete: false,
//   isFavorite: true
// },
// ]

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

  it('should update a existent task', async () => {
    const result = await sut.update({ id: '1', title: 'any title', description: 'any description', isFavorite: false, isComplete: false })

    expect(result).toEqual({ id: '1', title: 'any title', description: 'any description', isFavorite: false, isComplete: false })
  })
})
