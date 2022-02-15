import { AddCommentary } from '@/domain/features/add-commentary'
import { SaveCommentaryRepository } from '@/data/contracts'

export class AddCommentaryService implements AddCommentary {
  constructor (private readonly saveCommentaryRepository: SaveCommentaryRepository) {}

  async add (params: AddCommentary.Params): Promise<AddCommentary.Result> {
    return await this.saveCommentaryRepository.save(params)
  }
}
