import { describe, it, expect, beforeEach, afterEach } from 'vitest'

import { startServer } from '../src/launcher'
import { Configuration } from '../client'
import { BooksApi } from '../client/apis/BooksApi'

describe('Book API', () => {
  let address: string
  let stop: () => void

  beforeEach(async () => {
    const serverSetup = await startServer(0)
    address = serverSetup.url
    stop = () => serverSetup.server.close()
  })

  afterEach(() => {
    stop()
  })

  it('can create a new book', async () => {
    const client = new BooksApi(new Configuration({ basePath: address }))

    const response = await client.createOrUpdateBook({
      bookRequest: {
        name: 'Clean Code',
        description: 'A Handbook of Agile Software Craftsmanship',
        price: 45.99,
        author: 'Robert C. Martin',
        image: 'https://example.com/cleancode.jpg'
      }
    })

    expect(response.id).toBeTypeOf('string')
    expect(response.id.length).toBeGreaterThan(5)
  })
})
