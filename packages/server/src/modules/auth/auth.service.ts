import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserMapper } from '../../mappers/user.mappers';
import { UserInfo } from '../../entities/userInfo.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userMapper: UserMapper,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    login: string,
    password: string,
  ): Promise<UserInfo | null> {
    const user = await this.userService.getUser(login);

    if (user && user.password === password) {
      return this.userMapper.toUserResponce(user);
    }

    return null;
  }

  async login(user: UserInfo) {
    const payload = { username: user.login, sub: user.userId };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
