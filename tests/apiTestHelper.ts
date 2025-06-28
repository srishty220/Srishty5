import { beforeEach, afterEach } from 'vitest'
import { startServer } from '../src/launcher'

type ApiTestContext = {
  address: string
  stop: () => void
}

export function useApiTest(): ApiTestContext {
  const context = {} as ApiTestContext

  beforeEach(async () => {
    const { server, url } = await startServer(0) // ✅ random port
    context.address = url
    context.stop = () => server.close()
  })

  afterEach(() => {
    context.stop()
  })

  return context
}
