import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Question } from './question.schema'
import { nanoid } from 'nanoid';
import mongoose from 'mongoose';


@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name) private readonly questionModel,
    ) {}

    // 问卷列表查询
    async questionList({
        keyword = '',
        page = 1,
        pageSize = 10,
        isDeleted = false,
        isStar,
        author = ''
    }) {
        const whereOpt: any = { author, isDeleted };
        if (isStar != null) whereOpt.isStar = isStar;
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
    async questionAllList({ keyword = '', isDeleted = false, isStar, author = '' }) {
        const whereOpt: any = { author, isDeleted };
        if (isStar != null) whereOpt.isStar = isStar;
        if (keyword) {
            const reg = new RegExp(keyword, 'i');
            whereOpt.title = { $regex: reg }; // 模糊搜索
        }

        return await this.questionModel.countDocuments(whereOpt);
    }

    // 创建问卷
    async questionCreate(username: string) {
        const newQuestion = new this.questionModel({
            title: "问卷标题",
            desc: "问卷描述",
            author: username,
            componentList: [
                {
                    fe_id: nanoid(),
                    type: "questionInfo",
                    title: "问卷信息",
                    props: { 
                        title: '问卷标题',
                        desc: '问卷描述',
                    }
                }
            ]
        })
        return await newQuestion.save()
    }

    // ID 查询单个问卷
    async questionFindOne(id: string) {
        return await this.questionModel.findById(id)
    }

    // 更新问卷
    async questionUpdate(id: string, questionData, author: string) {
        return await this.questionModel.updateOne({ _id: id, author }, questionData)
    }
   
    // 删除单个问卷
    async questionDelete(id: string, author: string) {
        // return this.questionModel.findByIdAndDelete(id);
        const res = await this.questionModel.findOneAndDelete({
            _id: id,
            author
        });
        return res;
    }

    // 删除多个问卷
    async batchDelete(ids: string[], author: string) {
        const res = await this.questionModel.deleteMany({ 
            _id: { $in: ids }, // $in 查询当前_id 数组中是否包含 包含的话则删除
            author 
        });
        return res;
    }

    // 复制问卷
    async duplicate(id: string, author: string) {
        const question = await this.questionModel.findById(id);

        // 复制一份问卷
        const newQuestion = new this.questionModel({
            ...question.toObject(), // toObject 获取原始数据类型
            _id: new mongoose.Types.ObjectId(), // 生成新的mongodb ObjectId 
            title: `${question.title}副本`,
            author,
            isPublished: false,
            isStar: false,
            componentList: question.componentList.map(item => {
                return { 
                    ...item,
                    fe_id: nanoid()
                } // 复制一份问卷组件 生成新的fe_id
            })
        })
        return await newQuestion.save();
    }
}
