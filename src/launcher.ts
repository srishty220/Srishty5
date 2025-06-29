import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
import { koaSwagger } from 'koa2-swagger-ui'
import Router from '@koa/router'
import qs from 'koa-qs'
import { RegisterRoutes } from './routes/routes'
import swagger from '../build/swagger.json'
import { setupBookRoutes } from './books'
import { setupWarehouseRoutes } from './warehouse/index'

import './controllers/bookController'

export async function startServer (port = 3000): Promise<{ server: any, url: string }> {
  const app = new Koa()
  const router = new Router()

  qs(app)
  app.use(cors())
  app.use(koaBody())

  setupBookRoutes(router)
  setupWarehouseRoutes(router)

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
