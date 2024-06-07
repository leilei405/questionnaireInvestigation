import { Body, Controller, Post } from '@nestjs/common';
import { AnswerService } from './answer.service';

@Controller('answer')
export class AnswerController {
    constructor(
        private readonly answerService: AnswerService
    ) {}    


    @Post()
    async create(@Body() answerInfo) {
        return await this.answerService.create(answerInfo);
    }
}
