import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDtos } from './dtos/create-user.dtos';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDtos) {
    this.usersService.create(body.email, body.password);
  }
}
