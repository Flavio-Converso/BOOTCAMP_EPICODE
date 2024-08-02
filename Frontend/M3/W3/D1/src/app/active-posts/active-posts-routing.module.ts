import { NgModule } from '@angular/core';
import { ActivePostsComponent } from './active-posts.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ActivePostsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivePostsRoutingModule {}
