import { Injectable } from '@nestjs/common';
import * as environmentQuestions from './data/questions_environment.json';
import * as mitigationQuestions from './data/questions_mitigation.json';

@Injectable()
export class EnvironmentQuestionsService {
  questions = environmentQuestions;

  #getFiveQuestions(): any {
    return this.questions.slice(0, 5).map((question) => {
      var randomQu = Math.floor(Math.random() * this.questions.length);
      var random = this.questions[randomQu];
      const randomQuestion = JSON.parse(JSON.stringify(random));

      randomQuestion.answers.forEach((answer) => {
        delete answer.isCorrect;
      });

      return randomQuestion;
    });
  }

  getQuestions(): any {
    return this.#getFiveQuestions();
  }
}

export class MitigationQuestionsService extends EnvironmentQuestionsService {
  questions = mitigationQuestions;
}
