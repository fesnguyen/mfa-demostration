import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AuthGuard } from '@mfa/keycloak';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'remote1',
    loadChildren: () => import('remote1/Routes').then((m) => m.remoteRoutes),
    canActivate: [AuthGuard],
    data: { roles: ['Client'] }
  },
  {
    path: 'articles',
    loadChildren: () => import('articles/Routes').then((m) => m.remoteRoutes),
    canActivate: [AuthGuard],
    data: { roles: ['Client', 'Reader'] }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
