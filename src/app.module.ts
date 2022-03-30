import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles/roles.guard';
import { PostController } from './post/post.controller';
import { PostModule } from './post/post.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 9906,
    "username": "root",
    "password": "",
    "database": "textis",
    "logging" : true,
    "entities": [__dirname + "/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), AuthModule, UsersModule,
    PostModule],
  controllers: [AppController,
    AuthController,
    UsersController,
    PostController
  ],
  providers: [AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }],
})
export class AppModule {}
