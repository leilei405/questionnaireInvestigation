import { Body, Controller, Get, HttpException, HttpStatus, Post, Redirect } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { Public } from 'src/auth/decorators/public.decorators';

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
    @Public()
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

    // 登录
    @Public()
    @Post('login')
    @Redirect('/api/auth/login', 307)
    async login() {
        return 
    }

    // get 请求 301 永久重定向  302 临时重定向
    // post请求 307 临时重定向  308 永久重定向
}
