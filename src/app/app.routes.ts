import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NormsComponent } from './norms/norms.component';
import { ModelsComponent } from './models/models.component';
import { StandardsComponent } from './standards/standards.component';
import { CodeComponent } from './code/code.component';
import { TestsComponent } from './tests/tests.component';
import { ConclusionsComponent } from './conclusions/conclusions.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { QuizComponent } from './quiz/quiz.component';
import { EvaluateComponent } from './evaluate/evaluate.component';
import { ResultsComponent } from './results/results.component';
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'norms', component: NormsComponent },
  { path: 'models', component: ModelsComponent },
  { path: 'standards', component: StandardsComponent },
  { path: 'code', component: CodeComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'conclusions', component: ConclusionsComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'evaluate', component: EvaluateComponent },
  { path: 'results', component: ResultsComponent },
];
