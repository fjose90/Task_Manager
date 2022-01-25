import { getRepository } from 'typeorm'
import { AddTaskRepository, GetTasksRepository, DeleteTaskRepository } from '@/data/contracts'
import { AddTaskRepository,  } from '@/data/contracts'
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
    
  async delete (params: DeleteTaskRepository.Params): Promise<DeleteTaskRepository.Result> {
    const pgTaskRepository = getRepository(PgTask)
    const result = await pgTaskRepository.delete(params.id)
    return result.raw
  }
}
