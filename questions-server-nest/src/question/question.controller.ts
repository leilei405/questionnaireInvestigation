import { Controller, Get } from '@nestjs/common';

@Controller('question')
export class QuestionController {
    @Get()
    findAll() {
        return 'this is question list page';
    }

    @Get('detail')
    detail() {
        return 'this is question detail page';
    }
}
