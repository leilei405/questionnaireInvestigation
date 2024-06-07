import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Prop({ required: true })
  questionId: string; // 对应question的id

  @Prop()
  answerList: {
    componentFeId: string; // 对应组件的feId
    value: string[];
  }[]
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);