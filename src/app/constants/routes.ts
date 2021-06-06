import { Routes } from '@angular/router';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';
import { AppComponent } from './../app.component';

export const rutas: Routes = [
  {path: "", component: DashboardComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
