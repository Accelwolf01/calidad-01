import { Component, OnInit } from '@angular/core';
import { QualityService, Metric } from '../quality.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results',
  imports: [CommonModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent implements OnInit {
  metrics: Metric[] = [];
  overallScore: number = 0;

  ngOnInit(): void {
    this.metrics = this.qualityService.getMetrics();
    this.overallScore = this.qualityService.calculateOverallScore();
  }

  constructor(private qualityService: QualityService) {}

  getScoreClass(score: number): string {
    if (score >= 4) return 'bg-success';
    if (score >= 3) return 'bg-warning';
    return 'bg-danger';
  }

  getScoreText(score: number): string {
    if (score >= 4) return 'Excelente';
    if (score >= 3) return 'Aceptable';
    return 'Necesita Mejora';
  }

  getOverallText(score: number): string {
    if (score >= 4) return 'Calidad Superior';
    if (score >= 3) return 'Calidad Aceptable';
    return 'Requiere Mejoras';
  }

  getOverallCardClass(score: number): string {
    if (score >= 4) return 'border-success';
    if (score >= 3) return 'border-warning';
    return 'border-danger';
  }

  getOverallDescription(score: number): string {
    if (score >= 4) {
      return 'La aplicación demuestra altos estándares de calidad en todas las métricas evaluadas. Es un excelente ejemplo de buenas prácticas de desarrollo.';
    } else if (score >= 3) {
      return 'La aplicación cumple con los estándares básicos de calidad, aunque hay áreas que podrían mejorarse para alcanzar niveles óptimos.';
    } else {
      return 'La aplicación requiere mejoras significativas en varias áreas de calidad. Se recomienda revisar y aplicar las mejores prácticas aprendidas.';
    }
  }

  getProgressClass(score: number): string {
    if (score >= 4) return 'bg-success';
    if (score >= 3) return 'bg-warning';
    return 'bg-danger';
  }
}
