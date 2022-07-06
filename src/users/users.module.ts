import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BEntity } from './entities/user.entity';
/*Configure forFeature() in the UserModule to define
the repositories are registered in the current scope. With that in place, we can inject the
UsersRepository into the UsersService using "@InjectRepository()"*/
@Module({
  imports: [TypeOrmModule.forFeature([BEntity])],
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule {}
