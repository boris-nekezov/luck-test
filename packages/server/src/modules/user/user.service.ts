import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../../schemas/user.schema';
import { RegisterUserDTO } from '../../DTOs/user.dto';
import { UserIsExistException } from '../../Exceptions/user.exceptions';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(registerUserDto: RegisterUserDTO): Promise<User> {
    const existedUser = await this.getUser(registerUserDto.login);

    if (existedUser) {
      throw new UserIsExistException();
    }

    const createdUser = new this.userModel(registerUserDto);

    return createdUser.save();
  }

  async getUser(login: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ login }).exec();
  }

  async getUserById(id: string): Promise<UserDocument> {
    return this.userModel.findById(id).exec();
  }
}
