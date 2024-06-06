import { Controller, Get, Param, Patch, Query, Body, HttpException, HttpStatus, Post } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';
import { QuestionService } from './question.service'

@Controller('question')
export class QuestionController {
    constructor(
        private readonly questionService: QuestionService
    ) {}

    // 创建问卷
    @Post() 
    create(){
        return this.questionService.create();
    }
    
    // 获取问卷列表
    @Get()
    findAll(@Query('keyword') keyword: string,  @Query('page') page: number, @Query('pageSize') pageSize: number) {
        return { keyword, page, pageSize }
    }

    // 获取单个问卷
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.questionService.findOne(id);        
    }

    // 更新问卷
    @Patch(':id')
    updateOne(@Param('id') id: string, @Body() questionDto: QuestionDto) {
        return { id, ...questionDto };
    }

     // 添加过滤器之后 模拟错误信息
    // @Get('textError')
    // Test() {
    //     throw new HttpException('获取数据失败', HttpStatus.BAD_REQUEST)
    // }
}
