import { Controller, Get, Param, Patch, Query, Body, HttpException, HttpStatus } from '@nestjs/common';
import { QuestionDto } from './dto/question.dto';

@Controller('question')
export class QuestionController {

    // 添加过滤器之后 模拟错误信息
    @Get('textError')
    Test() {
        throw new HttpException('获取数据失败', HttpStatus.BAD_REQUEST)
    }
    
    // 获取问卷列表数据
    @Get()
    findAll(
        @Query('keyword') keyword: string,
        @Query('page') page: number,
        @Query('pageSize') pageSize: number,
    ) {
        return {
            keyword,
            page,
            pageSize,
        }
    }

    // 获取单个问卷详情数据
    @Get(':id')
    findOne(
        @Param('id') id: string,
    ) {
        console.log(id, '单个问卷详情');
        
        return { id }
    }

    // 问卷更新
    @Patch(':id')
    updateOne(
        @Param('id') id: string,
        @Body() questionDto: QuestionDto
    ) {
        console.log(id, questionDto, '更新问卷');
        
        return {
            id,
            ...questionDto,
        };
    }


    // 问卷详情页
    @Get('detail')
    detail() {
        return '问卷详情页';
    }
}
