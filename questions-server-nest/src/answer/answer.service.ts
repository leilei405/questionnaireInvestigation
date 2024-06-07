import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Answer } from './answer.schema';

@Injectable()
export class AnswerService {
    constructor(
        @InjectModel(Answer.name) private readonly answerModule
    ) {}

    // 获取所有问题
    async create(answerInfo) {
        if (answerInfo.questionId == null) {
            throw new HttpException('问题ID不能为空', HttpStatus.BAD_REQUEST);
        }

        const newQuestion = new this.answerModule(answerInfo);
        return await newQuestion.save();
    }
}
