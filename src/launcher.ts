import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
import { koaSwagger } from 'koa2-swagger-ui'
import { zodRouter } from 'koa-zod-router'
import swagger from '../build/swagger.json'

import { RegisterRoutes } from './routes/routes'
import { setupBookRoutes } from '../services/listings/src'
import { setupWarehouseRoutes } from '../services/warehouse/src'
import { setupOrderRoutes } from '../services/orders/src'

// tsoa controllers
import '../services/listings/src/controllers/bookController'
import '../services/listings/src/controllers/helloController'
import '../services/listings/src/controllers/testCheck'

export async function startServer (port = 3001): Promise<{ server: any, url: string }> {
  const app = new Koa()
  const router = zodRouter()

  app.use(cors())
  app.use(koaBody())

  setupBookRoutes(router)
  setupWarehouseRoutes(router)
  setupOrderRoutes(router)

  RegisterRoutes(router)

  app.use(router.routes())
  app.use(router.allowedMethods())

  app.use(
    koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: { spec: swagger as any },
      exposeSpec: true
    })
  )

  return await new Promise((resolve) => {
    const server = app.listen(port, () => {
      const url = `http://localhost:${(server.address() as any).port}`
      console.log(`Server running at ${url}`)
      resolve({ server, url })
    })
  })
}
