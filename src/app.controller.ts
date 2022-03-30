import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Roles } from './users/roles/roles.decorator';
import { Role } from './users/roles/roles.enum';
import { RolesGuard } from './users/roles/roles.guard';

@Controller()
@UseGuards(RolesGuard)
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Get('')
  printHello(){
    return 'hello admin';
  }
}