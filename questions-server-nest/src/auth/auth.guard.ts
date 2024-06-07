import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from './decorators/public.decorators';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private reflector: Reflector
    ) {}
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
        throw new UnauthorizedException('请先登录');
        }
        try {
        // 解析 token
        const payload = await this.jwtService.verifyAsync(
            token,
            {
            secret: jwtConstants.secret
            }
        );
        // 验证通过后，将用户信息保存到 request 上
        request['user'] = payload; // userInfo
        } catch {
        throw new UnauthorizedException('登录校验失败');
        }
        return true;
    }
  
    private extractTokenFromHeader(request: Request): string | undefined {
        // authorization(请求头) 格式为 Bearer token  
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}

