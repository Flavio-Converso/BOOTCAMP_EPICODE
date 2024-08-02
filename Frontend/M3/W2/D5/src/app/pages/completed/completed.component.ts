import { Component } from '@angular/core';
import { ArrayMergeService } from '../../array-merge.service';
import { iTodos } from '../../modules/todos';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss',
})
export class CompletedComponent {
  arrayMerged!: iTodos[];
  valueToSearch!: string;

  constructor(private arrayMergeService: ArrayMergeService) {}

  ngOnInit() {
    this.arrayMerged = this.arrayMergeService.getTodosWithUsers();
    console.log(this.arrayMerged);
  }

  onTodoStatusChange(item: iTodos) {
    alert(
      `"${item.todo}" has been marked as not completed and will be removed.`
    );
    console.log('id ' + item.id, item.completed);
  }
  searchValue(valueToSearch: string) {
    this.arrayMerged = this.arrayMergeService.searchValue(valueToSearch);
  }
}
