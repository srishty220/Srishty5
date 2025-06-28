import { Controller, Get, Route } from 'tsoa'

@Route('ping')
export class PingController extends Controller {
  @Get()
  public async ping(): Promise<string> {
    return 'pong'
  }
}

console.log('testCheck controller loaded')