import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './Authentification/Auth.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './Authentification/Auth.module';
import { UserService } from './users/users.service';
import { BEntity } from './users/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([BEntity]), ConfigModule.forRoot({ isGlobal: true }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.POST_HOST,
    port: +process.env.POST_PORT,
    username: process.env.POST_USER,
    password: process.env.POST_PASSWORD,
    database: process.env.POST_DATABASE,
    autoLoadEntities: true,
    synchronize: true,
  }), UsersModule, AuthModule],
  controllers: [AuthController],
  providers: [UserService],
})
export class AppModule {}
