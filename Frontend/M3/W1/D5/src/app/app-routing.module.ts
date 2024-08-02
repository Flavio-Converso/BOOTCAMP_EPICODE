import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { AudiComponent } from './components/audi/audi.component';
import { FordComponent } from './components/ford/ford.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'fiat',
    component: FiatComponent,
    title: 'Fiat',
  },
  {
    path: 'audi',
    component: AudiComponent,
    title: 'Audi',
  },
  {
    path: 'ford',
    component: FordComponent,
    title: 'Ford',
  },
  {
    path: '**',
    component: Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
