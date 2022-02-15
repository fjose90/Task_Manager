import { mock } from 'jest-mock-extended'
import { AddCommentaryService } from '@/data/services'
import { SaveCommentaryRepository } from '@/data/contracts'

describe('AddCommentary', () => {
  it('Should call SaveCommentaryRepository with correct params', async () => {
    const mockCommentary = {
      description: 'any_description',
      task_id: '1'
    }
    const addCommnentRepository = mock<SaveCommentaryRepository>()

    const addCommentaryService = new AddCommentaryService(addCommnentRepository)

    await addCommentaryService.add(mockCommentary)

    expect(addCommnentRepository.save).toHaveBeenLastCalledWith(mockCommentary)
  })

  it('Should return Commentary id if SaveCommentaryRepository saves successfully', async () => {
    const mockCommentary = {
      description: 'any_description',
      task_id: '1'
    }
    const addCommnentRepository = mock<SaveCommentaryRepository>()
    addCommnentRepository.save.mockResolvedValue({ id: '1' })

    const addCommentaryService = new AddCommentaryService(addCommnentRepository)

    const result = await addCommentaryService.add(mockCommentary)

    expect(result).toEqual({ id: '1' })
  })

  it('Should throw if SaveCommentaryRepository throws', async () => {
    const mockCommentary = {
      description: 'any_description',
      task_id: '1'
    }

    const addCommnentRepository = mock<SaveCommentaryRepository>()
    addCommnentRepository.save.mockImplementationOnce(() => { throw new Error('any_error') })

    const addCommentaryService = new AddCommentaryService(addCommnentRepository)

    const promise = addCommentaryService.add(mockCommentary)

    await expect(promise).rejects.toThrow()
  })
})
