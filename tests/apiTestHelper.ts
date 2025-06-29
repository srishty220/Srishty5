import { beforeEach, afterEach } from 'vitest'
import { startServer } from '../src/launcher'

interface ApiTestContext {
  address: string
  stop: () => void
}

export function useApiTest (): ApiTestContext {
  const context: ApiTestContext = { address: '', stop: () => {} }

  beforeEach(async () => {
    const { server, url } = await startServer(0)
    context.address = url
    context.stop = () => server.close()
  })

  afterEach(() => {
    context.stop()
  })

  return context
}
