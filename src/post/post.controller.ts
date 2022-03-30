import { Controller, Get, Request, Post, UseGuards, Body, Delete, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}


  @Get('')
  getPosts(@Request() req) {
    return this.postService.PostGet();
  }

  @Get('users/:id')
  getUserPost(@Param('id') id: number, @Request() req){
    return this.postService.PostGetUser(id, req);
  }

  @Post('')
  cteatePost(@Request() req, @Body() body){
    return this.postService.PostCreate(req, body);
  }

  @Delete(':id')
  delPost(@Param('id') id: number, @Request() req){
    return this.postService.PostDel(id, req);
  }
}