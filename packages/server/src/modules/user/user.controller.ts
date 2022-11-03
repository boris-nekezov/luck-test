import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from '../auth/local.guard';
import { RegisterUser } from '../../entities/registerUser.entity';
import { UserService } from './user.service';
import { UserProfileInterceptor } from '../../interceptors/userProfile.interceptor';
import { UserInfo } from '../../entities/userInfo.entity';
import { LoginResponse } from '../../entities/loginResponse.entity';

@ApiTags('User')
@Controller()
export class UsertController {
  constructor(
    private readonly userService: UserService,
    private authService: AuthService,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Creation of new user' })
  @ApiResponse({
    status: 201,
    description: 'Created user',
    type: UserInfo,
  })
  @ApiResponse({
    status: 409,
    description: 'User is already exist',
  })
  @UseInterceptors(UserProfileInterceptor)
  register(@Body() registerUser: RegisterUser) {
    return this.userService.createUser(registerUser);
  }

  @Post('login')
  @ApiOperation({ summary: 'Getting of user auth token' })
  @ApiResponse({
    status: 201,
    description: 'Bearer token',
    type: LoginResponse,
  })
  @ApiBody({ type: RegisterUser })
  @UseGuards(LocalAuthGuard)
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Getting of user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile',
    type: UserInfo,
  })
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(UserProfileInterceptor)
  getProfile(@Request() req) {
    return this.userService.getUserById(req.user.userId);
  }
}
