import Router from '@koa/router'

export function setupWarehouseRoutes( router: Router): void {
  router.post('/warehouse/place', async (ctx) => {
    // Replace with actual logic
    ctx.body = { status: 'books placed on shelf' }
  })

  router.post('/orders', async (ctx) => {
    ctx.body = { status: 'order placed' }
  })

  router.get('/orders', async (ctx) => {
    ctx.body = [{ id: 'order-1', status: 'pending' }]
  })

  router.get('/books/:id', async (ctx) => {
    ctx.body = { id: ctx.params.id, info: 'Book info here' }
  })

  router.post('/orders/:id/fulfil', async (ctx) => {
    ctx.body = { id: ctx.params.id, status: 'fulfilled' }
  })
}