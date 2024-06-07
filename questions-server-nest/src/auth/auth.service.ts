import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,        
    ){}

    // 验证用户
    async signIn(username: string, password: string){
        const user =  await this.userService.userLogin(username, password);
        if (!user) {
            throw new UnauthorizedException('用户不存在或密码错误');
        }
        // 返回用户信息 不暴露密码
        const { password: pw, ...userInfo } = user.toObject();

        return {
            token: this.jwtService.sign(userInfo),
        }
    }
}
