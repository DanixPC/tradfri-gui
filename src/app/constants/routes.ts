import { DashboardComponent } from './../componentes/pages/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { AppComponent } from './../app.component';

export const rutas: Routes = [
  {path: "", component: DashboardComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
