import { zodRouter, type ZodRouter } from 'koa-zod-router'
import { placeOrderRouter } from './place_order'
import { fulfilOrderRouter } from './fulfil_order'
import { listOrdersRouter } from './list_orders'

export function setupOrderRoutes(router: ZodRouter): void {
  placeOrderRouter(router)
  fulfilOrderRouter(router)
  listOrdersRouter(router)
}
