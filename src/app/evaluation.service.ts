import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private apiUrl = 'http://localhost:3000/evaluations'; // Back-end URL

  constructor(private http: HttpClient) {}

  submitEvaluation(evaluation: any): Observable<any> {
    return this.http.post(this.apiUrl, evaluation);
  }
}
