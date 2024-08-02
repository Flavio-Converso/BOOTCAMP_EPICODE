import { TocompleteComponent } from './pages/tocomplete/tocomplete.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Page404Component } from './pages/page404/page404.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Todo List',
  },
  {
    path: 'completed',
    component: CompletedComponent,
    title: 'Completed Todos',
  },
  {
    path: 'tocomplete',
    component: TocompleteComponent,
    title: 'To complete Todos',
  },
  {
    path: 'users',
    component: UsersComponent,
    title: 'Users List',
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
