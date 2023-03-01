import { Controller, Get, Req, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { CatsService } from './cats/cats.service';

@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly catsService: CatsService,
  ) {}

  // localhost:8000/cats/hello
  @Get('hello')
  getHello(): string {
    // console.log(req);
    // console.log(param);

    return this.appService.getHello();
  }
}
