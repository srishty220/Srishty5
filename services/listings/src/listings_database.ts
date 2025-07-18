import { type Collection, type Db, MongoClient } from 'mongodb'
import { type Book } from './types/Books'

const uri = process.env.MONGO_URL ?? 'mongodb://mongo'

export const client = new MongoClient(uri)

export interface ListingsDatabaseAccessor {
  database: Db
  books: Collection<Book>
}

export function getListingsDatabase (): ListingsDatabaseAccessor {
  const database = client.db('listings')
  const books = database.collection<Book>('books')

  return {
    database,
    books
  }
}
