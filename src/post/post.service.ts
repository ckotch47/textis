import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Posts } from './entity/post.entity';

export type Post = any;

@Injectable()
export class PostService {


  async findAllUser(user_id: any): Promise<Post | undefined> {
    return 0;//this.posts.filter(posts => posts.userid === user_id.userId)
  }

  async PostCreate(req, body): Promise<Post | undefined>{
    try {
      return new Posts(body.text, body.title, body.tag, false, req.user.userId).save();
    }
    catch (e) {
      return {"msg":{"success":false, "e":e}};
    }
  }
  async PostGet(): Promise<Post | undefined>{
    try {
      return  await
        Posts.getRepository()
          .createQueryBuilder("posts")
          .leftJoinAndSelect("posts.userID","users.ID")
          .where("posts.public = true")
          .getMany();
    }
    catch (e){
      return {"msg":{"success":false, "e":e}};
    }
  }

  async PostDel(id, req){
    try {
      const post =  await
        Posts.getRepository()
          .createQueryBuilder("posts")
          .where("posts.ID = :id", {id:id})
          .leftJoinAndSelect("posts.userID","users.ID")
          .getOne();
      let user: any;
      user = post.userID;
      if(req.user.userId === user.ID ) {
        await Posts.delete(id);
        return {"msg":{"success":true}};
      }
      else
        return  new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    catch (e){
      return {"msg":{"success":false, "e":e}};
    }
  }

  async PostGetUser(id){
    try {
      return await
        Posts.getRepository()
          .createQueryBuilder("posts")
          .where("userIDID = :id", { id: id })
          .andWhere("public = true")
          .getMany();
    }
    catch (e){
      return {"msg":{"success":false, "e":e}};
    }
  }
}
