import { DeleteCommentary } from '@/domain/features/delete-commentary'
import { DeleteCommentaryRepository } from '../contracts'

export class DeleteCommentaryService implements DeleteCommentary {
  constructor (private readonly commentaryRepository: DeleteCommentaryRepository) {}

  async handle (params: DeleteCommentary.Params): Promise<DeleteCommentary.Result> {
    await this.commentaryRepository.deleteById(params)
  }
}
