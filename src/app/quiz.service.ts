import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: Question[] = [
    {
      question: '¿Qué es la calidad de software?',
      options: ['La velocidad de ejecución', 'El grado en que el software cumple con requisitos especificados', 'El tamaño del código', 'El color de la interfaz'],
      answer: 1
    },
    {
      question: '¿Cuál es un modelo de calidad de software?',
      options: ['Modelo de McCall', 'Modelo OSI', 'Modelo de Bohr', 'Modelo de Newton'],
      answer: 0
    },
    {
      question: '¿Qué norma define características de calidad como funcionalidad y usabilidad?',
      options: ['ISO 9001', 'ISO/IEC 25010', 'CMMI', 'PEP 8'],
      answer: 1
    },
    {
      question: '¿Qué beneficio aporta la calidad en el código?',
      options: ['Aumenta bugs', 'Facilita mantenimiento', 'Reduce productividad', 'Complica colaboración'],
      answer: 1
    },
    {
      question: '¿Qué tipo de prueba detecta defectos temprano?',
      options: ['Prueba de aceptación', 'Prueba unitaria', 'Prueba de carga', 'Prueba de humo'],
      answer: 1
    }
  ];

  getQuestions(): Question[] {
    return this.questions;
  }

  calculateScore(answers: number[]): number {
    let score = 0;
    this.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });
    return score;
  }
}
