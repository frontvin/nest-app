import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("create")
  createNewUser() {
    return this.usersService.create({ username: "admin", password: "pass"})
  }
}
