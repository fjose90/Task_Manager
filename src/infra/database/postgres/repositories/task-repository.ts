import { getRepository } from 'typeorm'
import { AddTaskRepository, GetTasksRepository } from '@/data/contracts'
import { Task } from '@/domain/entities'
import { PgTask } from '@/infra/database/postgres/entities'

export class PgTaskRepository {
  async save (task: Task): Promise<AddTaskRepository.Result> {
    const pgTaskRepository = getRepository(PgTask)

    const { id } = await pgTaskRepository.save(task)
    return { id: id.toString() }
  }

  async loadTasks (): Promise<GetTasksRepository.Result> {
    const pgTaskRepository = getRepository(PgTask)

    const pgResult = await pgTaskRepository.find()

    return pgResult
  }
}
