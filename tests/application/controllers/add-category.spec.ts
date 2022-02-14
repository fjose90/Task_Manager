import { AddCategoryController } from '@/application/controllers'
import { RequiredFieldError } from '@/application/errors'
import { AddCategory } from '@/domain/features/add-category'
import { mock, MockProxy } from 'jest-mock-extended'

describe('AddCategoryController', () => {
  let addCategorySpy: MockProxy<AddCategory>
  let sut: AddCategoryController

  beforeAll(() => {
    addCategorySpy = mock<AddCategory>()
  })

  beforeEach(() => {
    sut = new AddCategoryController(addCategorySpy)
  })

  it('should return 400 if category title is not defined in request', async () => {
    const result = await sut.handle({ description: 'any_category_description', color: 'yellow' })

    expect(result).toEqual({
      statusCode: 400,
      data: new RequiredFieldError('title')
    })
  })

  it('should return 400 if category description is not defined in request', async () => {
    const result = await sut.handle({ title: 'any_category_title', color: 'yellow' })

    expect(result).toEqual({
      statusCode: 400,
      data: new RequiredFieldError('description')
    })
  })

  it('should call AddCategory with correct params', async () => {
    addCategorySpy.handle.mockResolvedValueOnce({
      id: 'any_id'
    })

    await sut.handle({ title: 'any_category_title', description: 'any_category_description', color: 'yellow' })

    expect(addCategorySpy.handle).toHaveBeenCalledWith({ title: 'any_category_title', description: 'any_category_description', color: 'yellow' })
  })

  it('should return status code 200 with category id if AddCategory completes successfully', async () => {
    addCategorySpy.handle.mockResolvedValueOnce({
      id: 'any_id'
    })

    const result = await sut.handle({ title: 'any_category_title', description: 'any_category_description', color: 'yellow' })
    expect(result).toEqual({ statusCode: 200, data: { id: 'any_id' } })
  })
})
