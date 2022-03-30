import { Body, Controller, Get, Request,  UseGuards, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}


  @Get('profile')
  getProfile(@Request() req) {
    return this.usersService.findOne(req.user.username);
  }

  @Put('change-password')
  async updateUser(@Body() body, @Request() req){
    return await this.usersService.changePassword(body, req.user);
  }

}