import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    // 获取用户列表
    @Get()
    userList() {
        return this.userService.userList();
    }

    // 注册用户
    @Post('register')
    async register(@Body() userDTO: UserDTO) {
         try {
             const result = await this.userService.userRegister(userDTO);
             return {
                 msg: '注册成功',
                 data: result
             }
         } catch (err) {
            throw new HttpException(err, HttpStatus.BAD_REQUEST)
         }
    }
}
