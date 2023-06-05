import { Controller, Get, Post, Body } from '@nestjs/common';
import { EnvironmentQuestionsService } from './environmentQuestionsService';
import { MitigationQuestionsService } from './environmentQuestionsService';

@Controller()
export class AppController {
  constructor(
    private readonly environmentQuestionsService: EnvironmentQuestionsService,
    private readonly mitigationQuestionsService: MitigationQuestionsService,
    ) {}

  @Get('environment_questions')
  getEnvironmentQuestions(): [] {
    return this.environmentQuestionsService.getQuestions();
  }

  @Get('mitigation_questions')
  getMitigationQuestions(): [] {
    return this.mitigationQuestionsService.getQuestions();
  }
  @Post()
    sendEnvironmentAnswer(@Body() answer){
        return answer;
    }
    @Post()
    sendMitigationAnswer(@Body() answer){
        return answer;
    }
}
