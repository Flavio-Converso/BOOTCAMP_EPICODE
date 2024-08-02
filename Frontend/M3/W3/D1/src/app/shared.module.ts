import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SinglePostComponent } from './single-post/single-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule, FormsModule],
  exports: [SinglePostComponent, FormsModule],
})
export class SharedModule {}
