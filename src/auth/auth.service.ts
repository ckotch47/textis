import { Controller, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../users/entity/users.entity';

import { mycrypto } from './crypt/mycrypto';

@Injectable()
@Controller('auth')
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.ID, roles: user.roles };
    return {
      baerer_token: this.jwtService.sign(payload),
    };
  }
  async addUser(body: any){
    const mcpt = new mycrypto;
    const user = new Users(body.username,await mcpt.mcrypt(body.password),'user');
    try {
      await user.save();
      return user;
    }
    catch (e) {
      return {"msg":{"error":e.errno}};
    }
  }
}