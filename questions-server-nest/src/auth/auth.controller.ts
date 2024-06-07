import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from 'src/user/dto/user.dto';

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
}
