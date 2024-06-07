import { Controller, Get, Param, Patch, Query, Body, Post, Delete } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service'
import { count } from 'console';

@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService
    ) {}

    // 创建问卷
    @Post() 
    create(){
        return this.questionService.questionCreate();
    }
    
    // 获取问卷列表
    @Get()
    async findAll(@Query('keyword') keyword: string,  @Query('page') page: number, @Query('pageSize') pageSize: number) {
        const data = await this.questionService.questionList({ keyword, page, pageSize });
        const total = await this.questionService.questionAllList({ keyword });
        return {
            data,
            total,
        }
    }

    // 获取单个问卷
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.questionService.questionFindOne(id);        
    }

    // 删除问卷
    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.questionService.questionDelete(id);
    }

    // 更新问卷
    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() questionData: QuestionDto) {
        return this.questionService.questionUpdate(id, questionData);
    }

    
}
