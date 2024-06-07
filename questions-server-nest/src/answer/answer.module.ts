import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { Answer, AnswerSchema } from './answer.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }])],
  controllers: [AnswerController],
  providers: [AnswerService]
})
export class AnswerModule {}
