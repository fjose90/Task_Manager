import { GetCommentaries } from '@/domain/features/get-commentaries'
import { GetCommentariesRepository } from '../contracts/get-commentaries-repository'

export class GetCommentariesService implements GetCommentaries {
  constructor (private readonly commentariesRepository: GetCommentariesRepository) {}

  async handle (): Promise<GetCommentariesRepository.Result> {
    return await this.commentariesRepository.loadCommentaries()
  }
}
