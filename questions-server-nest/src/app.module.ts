import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // 数据库全局配置信息
    MongooseModule.forRoot(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`), // 不要写localhost
    QuestionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
