import { Injectable } from '@nestjs/common';
import { Users } from './entity/users.entity';


@Injectable()
export class UsersService {

  async findOne(usernames: string): Promise<any> {
    let user = await Users.find({ where: { username: usernames } });
    return  user[0];
  }

  async changePassword(body: any, user: any){
    let selfUser = await Users.findOne(user.ID);
    if (body.passwordBack === selfUser.password || body.password != undefined) {
      selfUser.password = body.password;
      await Users.save(selfUser);
      return {"msg":{"success":true}}
    }
    else
      return {"msg":{"success":false}}
  }
}
