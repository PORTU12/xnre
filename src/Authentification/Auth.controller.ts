import { Controller, Get, Request, Post, UseGuards, Body, Put, Delete, Logger } from '@nestjs/common';
import { PostDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from 'src/users/dto/login.dto';
import { BEntity } from 'src/users/entities/user.entity';
import { UserService } from '../users/users.service';
import { AuthService } from './Auth.service';
import { JwtAuthGuard } from './jwt-bauth.guards';


@Controller()
export class AuthController {
  constructor(private userService: UserService,
    private authService: AuthService) {}

  @Post()
  subscribe(@Body() userdata: PostDto):Promise<PostEntity>{
    return this.authService.subscribe(userdata)
  }

  /*@Post('login')
  async login(@Body() loginDto: LoginDto){
      const response = await this.authService.login(loginDto)
    }
  @Put('login/:id')
  async update(@Body() data) {
    console.log(data);
    
    return this.authService.login(data);
  }

  @Delete(':id')
  async delete(@Body() data) {
    console.log(data);
    
    return this.authService.login(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}*1/
/*import {
  Body,
  Controller,
  Get,
  HttpException,
  Logger,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { LoginDto } from '../dtos/login.dto';
import { Public } from '../../shared/decorators/public.decorator';
import { AuthService, UserService } from '../services';
import { VerifiesEmailDto } from '../dtos/verify-email-resent.dto';
import { VerifiesEmailExistingDto } from '../dtos/verify-email-exiting.dto';
import { VerifiesEmailRecoverDto } from '../dtos/verify-email-recover.dto';
import { VerifiesPassworRecoverdDto } from '../dtos/verify-password-recover.dto';
import { ValideProfilDto } from '../dtos/valide-profil.dto';


@Controller()
export class AuthController {
  private logger = new Logger(AuthController.name);
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('login')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    try {
      const response = await this.authService.login(loginDto);
      this.logger.log({
        message: `/Post /login - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: 'Something went wrong',
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }

  @Put('/verify-email/:token')
  @Public()
  @ApiOkResponse({
    description:
      'This endpoint allows to verify the user by passing a token in the request body.',
  })
  @Public()
  async verifiesEmail(@Param('token') idToken: string) {
    try {
      const response = await this.authService.verifiesEmail(idToken);
      this.logger.log({
        message: `/Post verify-email - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: `/Post verify-email - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }

  @Post('/resent-email')
  @ApiOkResponse({
    description: 'This endpoint allows to send the verification email .',
  })
  @Public()
  async resentEmail(@Body() verifiesEmailDto: VerifiesEmailDto) {
    try {
      const response = await this.authService.resentEmail(verifiesEmailDto);
      this.logger.log({
        message: `/Post resent-email - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: `/Post resent-email - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }
  @Post('/verify-email/existing')
  @ApiOkResponse({
    description: 'This endpoint checks if an email already exists .',
  })
  @Public()
  async verifyEmailExisting(
    @Body() verifiesEmailExistingDto: VerifiesEmailExistingDto,
  ) {
    try {
      const response = await this.authService.verifyEmailExisting(
        verifiesEmailExistingDto,
      );
      this.logger.log({
        message: `/Post /verify-email/existing - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: `/Post /verify-email/existing - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }

  @Post('/forgot-password')
  @ApiOperation({ summary: 'send mail for password recovery' })
  @Public()
  async verifyRecoverySystem(@Body() email: VerifiesEmailRecoverDto) {
    try {
      const response = await this.authService.verifyForRecoverySystem(email);
      this.logger.log({
        message: `/Post /forget-password - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: `/Post /forget-password - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }
  @Put('recover-password')
  @Public()
  @ApiOperation({ summary: 'recover user password when password forgetten' })
  public async editPassword(
    @Query('token') token: string,
    @Body() verifiesPassworRecoverdDto: VerifiesPassworRecoverdDto,
  ) {
    try {
      const user = await this.userService.recoverPassword(
        token,
        verifiesPassworRecoverdDto,
      );
      this.logger.log({
        message: `/Put /recover-password - Works with success`,
      });
      return user;
    } catch (e) {
      this.logger.error({
        message: `/Put /recover-password - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }
  @Put('valide-profiles')
  @Public()
  @ApiOperation({ summary: 'change profil password after create' })
  public async valideProfil(@Body() valideProfilDto: ValideProfilDto) {
    try {
      const response = await this.userService.valideProfil(valideProfilDto);
      this.logger.log({
        message: `/Put /valide-profil - Works with success`,
      });
      return response;
    } catch (e) {
      this.logger.error({
        message: `/Put /valide-profil - Something went wrong`,
        errors: e,
      });
      throw new HttpException(e.message, e.status);
    }
  }*/
}