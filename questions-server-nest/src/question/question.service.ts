import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './question.schema'


@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel,
    ) {}

    // 问卷列表查询
    async questionList({keyword = '', page = 1, pageSize = 10}) {
        const whereOpt: any = {};
        if (keyword) {
            const reg = new RegExp(keyword, 'i');
            whereOpt.title = { $regex: reg }; // 模糊搜索
        }
        return await this.questionModel
        .find(whereOpt)
        .sort({ _id: -1 }) // 逆序排序
        .skip((page - 1) * pageSize) // 分页
        .limit(pageSize);
    }

    // 问卷列表查询总数
    async questionAllList({ keyword = '' }) {
        const whereOpt: any = {};
        if (keyword) {
            const reg = new RegExp(keyword, 'i');
            whereOpt.title = { $regex: reg }; // 模糊搜索
        }

        return await this.questionModel.countDocuments(whereOpt);
    }

    // 创建问卷
    async questionCreate() {
        const newQuestion = new this.questionModel({
            title: "questionTitle" + Date.now(),
            desc: "desc",
        })
        return await newQuestion.save()
    }

    // ID 查询单个问卷
    async questionFindOne(id: string) {
        return await this.questionModel.findById(id)
    }

    // 更新问卷
    async questionUpdate(id: string, questionData) {
        return await this.questionModel.updateOne({ _id: id}, questionData)
    }
   
    // 删除问卷
    async questionDelete(id: string) {
        return this.questionModel.findByIdAndDelete(id);
    }
}
