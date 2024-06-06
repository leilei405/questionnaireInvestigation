import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './question.schema'


@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel,
    ) {}

    // 创建问卷
    async create() {
        const newQuestion = new this.questionModel({
            title: "questionTitle" + Date.now(),
            desc: "desc",
        })
        return await newQuestion.save()
    }

    // ID 查询单个问卷
    async findOne(id: string) {
        return await this.questionModel.findById(id)
    }

}
