import { Controller, Post, Route, Tags, Body } from 'tsoa'
import type { BookRequest, BookResponse } from '../../types/Books'
import { getBookDatabase } from '../../../../shared/database_access'
import { ObjectId } from 'mongodb'

@Route('books')
@Tags('Books')
export class BookController extends Controller {
  @Post()
  public async createOrUpdateBook(@Body() body: BookRequest): Promise<BookResponse> {
    const { books: bookCollection } = getBookDatabase()

    if ('id' in body && body.id) {
      await bookCollection.replaceOne(
        { _id: ObjectId.createFromHexString(body.id) },
        { ...body }
      )
      return { id: body.id }
    } else {
      const result = await bookCollection.insertOne(body)
      return { id: result.insertedId.toHexString() }
    }
  }
}
