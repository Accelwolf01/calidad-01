import { Component, OnInit } from '@angular/core';
import { QuizService, Question } from '../quiz.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: Question[] = [];
  answers: number[] = [];
  score: number | null = null;
  currentQuestion: number = 0;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.answers = new Array(this.questions.length).fill(-1);
  }

  selectAnswer(questionIndex: number, answerIndex: number): void {
    this.answers[questionIndex] = answerIndex;
  }

  nextQuestion(): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
    }
  }

  isQuizComplete(): boolean {
    return this.answers.every(answer => answer !== -1);
  }

  submitQuiz(): void {
    this.score = this.quizService.calculateScore(this.answers);
  }

  getLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

  goToEvaluate(): void {
    this.router.navigate(['/evaluate']);
  }
}
