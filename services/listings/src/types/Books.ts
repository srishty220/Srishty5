export class BookRequest {
  id?: string

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

export class BookResponse {
  /**
   * @example "65bf30ccffb4d29090ecb996"
   */
  id!: string
}
