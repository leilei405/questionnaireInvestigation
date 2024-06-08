import { Controller, Get, Param, Patch, Query, Body, Post, Delete, Request, HttpStatus, HttpException } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service'
import { Public } from 'src/auth/decorators/public.decorators';

@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService
    ) {}

    // 创建问卷
    @Post() 
    create(@Request() req){
        const { username } = req.user;
        return this.questionService.questionCreate(username);
    }
    
    // 获取问卷列表
    @Get()
    async findAll(
        @Query('keyword') keyword: string,
        @Query('page') page: number,
        @Query('pageSize') pageSize: number,
        @Query('isDeleted') isDeleted: boolean = false,
        @Query('isStar') isStar: boolean = false,
        @Request() req
    ) {
        const { username } = req.user;
        // 获取问卷列表
        const data = await this.questionService.questionList({ 
            keyword,
            page,
            pageSize,
            isDeleted,
            isStar,
            author: username
        });
        // 获取总数
        const total = await this.questionService.questionAllList({ 
            keyword,
            isDeleted,
            isStar,
            author: username
        });
        return {
            list: data,
            total,
        }
    }

    // 获取单个问卷
    @Public()
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.questionService.questionFindOne(id);        
    }

    // 删除单个问卷
    @Delete(':id')
    deleteOne(@Param('id') id: string, @Request() req) {
        const { username } = req.user;
        return this.questionService.questionDelete(id, username);
    }

    // 批量删除问卷
    @Delete()
    batchDelete(@Body() body, @Request() req){
        const { username } = req.user;
        const { ids = [] } = body;
        return this.questionService.batchDelete(ids, username);
    }

    // 更新问卷
    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() questionData: QuestionDto, @Request() req) {
        const { username } = req.user;
        return this.questionService.questionUpdate(id, questionData, username);
    }

    // 复制问卷
    @Post('duplicate/:id')
    duplicate(@Param('id') id: string, @Request() req) {
        const { username } = req.user;
        return this.questionService.duplicate(id, username);
    }
    
}
