import { Example, Property } from 'tsoa'

export class BookRequest {
  @Property()
  @Example('The Pragmatic Programmer')
  name!: string

  @Property()
  @Example('A practical guide to software craftsmanship')
  description!: string

  @Property()
  @Example(39.99)
  price!: number

  @Property()
  @Example('Andy Hunt')
  author!: string

  @Property()
  @Example('https://example.com/image.jpg')
  image!: string
}

export class BookResponse {
  @Property()
  @Example('65bf30ccffb4d29090ecb996')
  id!: string
}
