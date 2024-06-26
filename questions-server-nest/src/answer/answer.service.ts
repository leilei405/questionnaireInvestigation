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

    // 获取答卷数量
    async getAnswerCount(questionId) {
        if (!questionId) return 0;
        const res =  await this.answerModule.countDocuments({ questionId });
        return res;
    }

    // 获取所以答卷 带有分页
    async getAnswers(questionId: string, opt:{ page: number; pageSize: number }) {
        if (!questionId) return [];

        const { page = 1, pageSize = 10 } = opt;
        
        const list = await this.answerModule
        .find({ questionId })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .sort({ createdAt: -1 })
        
        return list;
    }
}
