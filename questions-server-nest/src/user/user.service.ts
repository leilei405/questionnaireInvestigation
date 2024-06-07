import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel
    ){}

    // 创建用户
    async userRegister(userData){
        const user = new this.userModel(userData);
        return await user.save();
    }

    // 用户登录
    async userLogin(username, password){
        const user = await this.userModel.findOne({ username, password });
        return user;
    }

    // 用户列表
    async userList(){
        const users = await this.userModel.find();
        return users;
    }
}
