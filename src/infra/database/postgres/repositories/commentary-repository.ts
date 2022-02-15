import { getRepository } from 'typeorm'
import { DeleteCommentaryRepository, SaveCommentaryRepository } from '@/data/contracts'
import { Commentary } from '@/domain/entities'
import { PgCommentary, PgTask } from '@/infra/database/postgres/entities'
import { GetCommentariesRepository } from '@/data/contracts/get-commentaries-repository'

export class PgCommentaryRepository implements SaveCommentaryRepository, DeleteCommentaryRepository, GetCommentariesRepository {
  async save (commentary: Commentary): Promise<SaveCommentaryRepository.Result> {
    const pgTaskRepository = getRepository(PgTask)
    const pgCommentaryRepository = getRepository(PgCommentary)

    const task = await pgTaskRepository.findOne(commentary.task_id)

    const { id } = await pgCommentaryRepository.save({ description: commentary.description, task: task })
    return { id: id.toString() }
  }

  async loadCommentaries (): Promise<GetCommentariesRepository.Result> {
    const pgCommentaryRepository = getRepository(PgCommentary)

    const result = await pgCommentaryRepository.find({ relations: ['task'] })

    return result.map((commentary) => ({ description: commentary.description, task_id: commentary?.task?.id.toString() ?? null }))
  }

  async deleteById ({ id }: DeleteCommentaryRepository.Params): Promise<DeleteCommentaryRepository.Result> {
    const pgCommentaryRepository = getRepository(PgCommentary)

    await pgCommentaryRepository.delete({ id: parseInt(id) })
  }
}
