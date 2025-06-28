import Koa from 'koa'
import cors from '@koa/cors'
import koaBody from 'koa-bodyparser'
import { koaSwagger } from 'koa2-swagger-ui'
import Router from '@koa/router'
import zodRouter from 'koa-zod-router'
import qs from 'koa-qs'

import { RegisterRoutes } from './routes/routes'
import swagger from '../build/swagger.json'

import { setupBookRoutes } from './books'
import { setupWarehouseRoutes } from './warehouse'

import './controllers/bookController'
import './controllers/testCheck'



export async function startServer(port = 3000) {
  const app = new Koa()
  const router = zodRouter({ zodRouter: { exposeRequestErrors: true } })

  qs(app)
  app.use(cors())
  app.use(koaBody())

  setupBookRoutes(router)
  setupWarehouseRoutes(router)

  // tsoa-generated routes
  RegisterRoutes(router)

  app.use(router.routes())
  app.use(router.allowedMethods())

  app.use(
    koaSwagger({
      routePrefix: '/docs',
      swaggerOptions: { spec: swagger },
      exposeSpec: true
    })
  )

  return new Promise<{ server: any; url: string }>((resolve) => {
    const server = app.listen(port, () => {
      const url = `http://localhost:${(server.address() as any).port}`
      console.log(`Server running at ${url}`)
      resolve({ server, url })
    })
  })
}
