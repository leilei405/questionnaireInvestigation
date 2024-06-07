import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AnswerModule } from './answer/answer.module';
import { StatModule } from './stat/stat.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 数据库全局配置信息
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`), // 不要写localhost
    QuestionModule, // 问卷
    UserModule, // 用户
    AuthModule, // 验证
    AnswerModule, // 答卷
    StatModule, // 统计
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
