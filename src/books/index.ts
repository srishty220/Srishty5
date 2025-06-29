import Router from '@koa/router'

export function setupBookRoutes(router: Router): void {
  router.get('/books', async (ctx) => {
    ctx.body = [{ id: '1', name: 'Example Book' }]
  })

  router.post('/books', async (ctx) => {
    const body = ctx.request.body as Record<string, unknown>
    ctx.body = { id: 'created-id', ...body }
  })

  router.delete('/books/:id', async (ctx) => {
    ctx.status = 204
  })

  router.get('/books/:id', async (ctx) => {
    ctx.body = { id: ctx.params.id, title: 'Book Title' }
  })
}
