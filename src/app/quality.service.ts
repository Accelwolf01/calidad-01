import { Injectable } from '@angular/core';

export interface Metric {
  name: string;
  description: string;
  score: number; // 0-5
}

@Injectable({
  providedIn: 'root'
})
export class QualityService {
  private metrics: Metric[] = [
    { name: 'Funcionalidad', description: 'Capacidad del software para proporcionar las funciones requeridas', score: 4 },
    { name: 'Usabilidad', description: 'Facilidad de uso y aprendizaje del software', score: 5 },
    { name: 'Fiabilidad', description: 'Capacidad para mantener un nivel de rendimiento bajo condiciones normales', score: 4 },
    { name: 'Rendimiento', description: 'Velocidad y eficiencia en el uso de recursos', score: 3 },
    { name: 'Mantenibilidad', description: 'Facilidad para modificar y corregir el software', score: 4 },
    { name: 'Portabilidad', description: 'Capacidad para ser transferido a diferentes entornos', score: 5 }
  ];

  getMetrics(): Metric[] {
    return this.metrics;
  }

  calculateOverallScore(): number {
    const total = this.metrics.reduce((sum, m) => sum + m.score, 0);
    return Math.round((total / this.metrics.length) * 10) / 10; // Average to 1 decimal
  }
}
