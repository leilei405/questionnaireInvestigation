import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Post('/login')
    async login(@Body() userInfo: UserDTO) {
        const { username, password } = userInfo;
        return await this.authService.signIn(username, password);
    }

    // 测试登录
    // UseGuards 装饰器，表示该控制器下的所有方法都需要经过守卫验证
    @UseGuards(AuthGuard)
    @Get('test')
    async test(@Request() req) {
        return req.user;
    }
}
