import { Controller, Get, Param, Query } from '@nestjs/common';
import { StatService } from './stat.service';

@Controller('stat')
export class StatController {
    constructor(
        private readonly statService: StatService
    ) {}

    @Get(':questionId')
    async getQuestionStat(
        @Param('questionId') questionId: string,
        @Query('page') page: number = 1,
        @Query('pageSize') pageSize: number = 10,
    ) {
      const res = await this.statService.getQuestionStatListAndCount(questionId, { page, pageSize });
      return res;
      
    }

    @Get(':questionId/:componentFeId')
    async getComponentStat(
      @Param('questionId') questionId: string,
      @Param('componentFeId') componentFeId: string,
    ) {
      const stat = await this.statService.getComponentStat(
        questionId,
        componentFeId,
      );
      console.log(stat);
      
      return { stat };
    }
}
