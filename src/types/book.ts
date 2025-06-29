/**
 * Request body for creating or updating a book
 */
export class BookRequest {
  /**
   * @example "The Pragmatic Programmer"
   */
  name!: string

  /**
   * @example "A practical guide to software craftsmanship"
   */
  description!: string

  /**
   * @example 39.99
   */
  price!: number

  /**
   * @example "Andy Hunt"
   */
  author!: string

  /**
   * @example "https://example.com/image.jpg"
   */
  image!: string
}

/**
 * Response returned after a book is created or updated
 */
export class BookResponse {
  /**
   * @example "65bf30ccffb4d29090ecb996"
   */
  id!: string
}
