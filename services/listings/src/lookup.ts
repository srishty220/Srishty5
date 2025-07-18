import { z } from 'zod'
import { getListingsDatabase } from './listings_database'
import { ObjectId } from 'mongodb'
import { type ZodRouter } from 'koa-zod-router'

export default function getBookByIdRoute(router: ZodRouter): void {
  router.register({
    method: 'get',
    path: '/books/:id',
    validate: {
      params: z.object({
        id: z.string().length(24, 'Invalid MongoDB ObjectId')
      })
    },
    handler: async (ctx, next) => {
      const { books } = getListingsDatabase()
      const id = ctx.request.params.id

      const book = await books.findOne({ _id: new ObjectId(id) })

      if (!book) {
        ctx.status = 404
        ctx.body = { error: 'Book not found' }
        return await next()
      }

      ctx.body = {
        id: book._id.toString(),
        name: book.name,
        description: book.description,
        price: book.price,
        author: book.author,
        image: book.image
      }

      await next()
    }
  })
}
