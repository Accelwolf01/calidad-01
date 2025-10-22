import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grade-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './grade-calculator.component.html',
  styleUrl: './grade-calculator.component.css'
})
export class GradeCalculatorComponent {
  grades: number[] = [];
  weights: number[] = [];
  newGrade: number = 0;
  newWeight: number = 0;
  average: number | null = null;

  addGrade(): void {
    if (this.newGrade >= 0 && this.newGrade <= 100 && this.newWeight > 0) {
      this.grades.push(this.newGrade);
      this.weights.push(this.newWeight);
      this.newGrade = 0;
      this.newWeight = 0;
      this.calculateAverage();
    }
  }

  removeGrade(index: number): void {
    this.grades.splice(index, 1);
    this.weights.splice(index, 1);
    this.calculateAverage();
  }

  calculateAverage(): void {
    if (this.grades.length === 0) {
      this.average = null;
      return;
    }
    const totalWeight = this.weights.reduce((sum, w) => sum + w, 0);
    const weightedSum = this.grades.reduce((sum, g, i) => sum + (g * this.weights[i]), 0);
    this.average = Math.round((weightedSum / totalWeight) * 100) / 100;
  }
}
