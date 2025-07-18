import { zodRouter, type ZodRouter } from 'koa-zod-router'

import createOrUpdateBook from './create_or_update'
import deleteBook from './delete'
import getBookRoute from './lookup'
import booksList from './list'

export function setupBookRoutes(router: ZodRouter): void {
  booksList(router)
  createOrUpdateBook(router)
  deleteBook(router)
  getBookRoute(router)
}
