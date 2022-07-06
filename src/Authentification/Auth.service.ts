import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { PostDto } from 'src/users/dto/create-user.dto';
import { BEntity } from 'src/users/entities/user.entity';
import { UserService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {
    constructor(
        /*@InjectRepository(PostEntity)
        private AuthRepository: Repository<PostEntity>,*/
        private userService: UserService,
        private jwtService: JwtService
    ){}

    /*async subscribe(userdata: PostDto): Promise<PostEntity>{
        const user = this.AuthRepository.create({
            ...userdata
        })
        user.salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, user.salt);
        try {
            await this.AuthRepository.save(user)
        } catch(e) {throw new ConflictException('username et password doivent être unique')}
            
        return {
            id: user.id,
            name: user.name,
            role: user.role,
            salt: user.salt,
            email: user.email,
            password: user.password
        };
    }*/

    async validateBook(name: number, password: string): Promise<any>{
        const book = await this.userService.findOne(name);
        if (book && book.password === password){
            const {password, ...result} = book;
            return result;
        }
        return null;
    }

    async login(data: any){
        const payload = { name: data.name};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
