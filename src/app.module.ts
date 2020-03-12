import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: "localhost",
      port: 5432,
      username: "root",
      password: "root",
      database: "users_db",
      entities: [User],
      synchronize: true,
    }),
    UsersModule
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
})
export class AppModule {}
