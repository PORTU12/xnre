import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthService } from './Auth.service';
import { LocalStrategy } from './LocalStrategy';
import { UserService } from '../users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BEntity } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BEntity]),
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}