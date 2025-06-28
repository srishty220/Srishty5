import { Controller, Post, Route, Tags, Body } from 'tsoa'
import { BookRequest, BookResponse } from '../types/book'

@Route('books')
@Tags('Books')
export class BookController extends Controller {
  @Post()
  public async createOrUpdateBook(@Body() body: BookRequest): Promise<BookResponse> {
    return { id: 'placeholder-id' }
  }
}
