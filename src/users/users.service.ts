import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { PostDto } from './dto/create-user.dto';
import { UpdateBookDto } from './dto/update-user.dto';
import { BEntity } from './entities/user.entity';

@Injectable()
/*We add five methods in our service,*/
export class UserService {
  constructor(@InjectRepository(BEntity)
  private readonly userRepository: Repository<BEntity>) { }

  
  createUser(users: PostDto): Promise<PostDto> {
    const user: PostDto = new PostDto();

    user.name;
    user.email;
    user.password 

    return this.userRepository.save(users)
  }

  findAll(): Promise<PostDto[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<PostDto> {
    return this.userRepository.findOne(+id);
  }

  update(id: number, updateBookDto: UpdateBookDto):Promise<UpdateResult> {
    return this.userRepository.update(id, updateBookDto);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }

}
