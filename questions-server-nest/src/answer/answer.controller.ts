import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';
import { Public } from 'src/auth/decorators/public.decorators';

@Controller('answer')
export class AnswerController {
    constructor(
        private readonly answerService: AnswerService
    ) {}    


    @Public()
    @Post()
    async create(@Body() answerInfo) {
        console.log(answerInfo);
        return await this.answerService.create(answerInfo);
    }
}
