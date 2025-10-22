import { Component } from '@angular/core';
import { EvaluationService } from '../evaluation.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate',
  imports: [FormsModule, CommonModule],
  templateUrl: './evaluate.component.html',
  styleUrl: './evaluate.component.css'
})
export class EvaluateComponent {
  name: string = '';
  funcionalidad: number = 5;
  usabilidad: number = 5;
  mantenibilidad: number = 5;
  eficiencia: number = 5;
  portabilidad: number = 5;
  submitted: boolean = false;

  constructor(private evaluationService: EvaluationService, private router: Router) {}

  submitEvaluation(): void {
    const evaluation = {
      name: this.name,
      funcionalidad: this.funcionalidad,
      usabilidad: this.usabilidad,
      mantenibilidad: this.mantenibilidad,
      eficiencia: this.eficiencia,
      portabilidad: this.portabilidad
    };
    console.log('Enviando evaluación:', evaluation);
    this.evaluationService.submitEvaluation(evaluation).subscribe({
      next: (response) => {
        console.log('Evaluación enviada exitosamente:', response);
        this.submitted = true;
        setTimeout(() => this.router.navigate(['/results']), 2000);
      },
      error: (err) => {
        console.error('Error submitting evaluation', err);
        alert('Error al enviar la evaluación. Revisa la consola para más detalles.');
      }
    });
  }
}
