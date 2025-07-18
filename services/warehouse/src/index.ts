import { type ZodRouter } from 'koa-zod-router'

import { placeBooksOnShelfRouter } from './place_on_shelf'
import { getBookInfoRouter } from './get_book_info'

export function setupWarehouseRoutes(router: ZodRouter): void {
  placeBooksOnShelfRouter(router)
  getBookInfoRouter(router)
}
