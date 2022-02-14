import { Category } from '@/domain/entities'

export interface GetCategories {
  handle: () => Promise<GetCategories.Result>
}

export namespace GetCategories {

  export type Result = Category[]

}
