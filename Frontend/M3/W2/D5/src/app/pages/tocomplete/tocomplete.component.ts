import { Component } from '@angular/core';
import { ArrayMergeService } from '../../array-merge.service';
import { iTodos } from '../../modules/todos';

@Component({
  selector: 'app-tocomplete',
  templateUrl: './tocomplete.component.html',
  styleUrl: './tocomplete.component.scss',
})
export class TocompleteComponent {
  arrayMerged: iTodos[] = [];
  valueToSearch!: string;
  constructor(private arrayMergeService: ArrayMergeService) {}

  ngOnInit() {
    this.arrayMerged = this.arrayMergeService.getTodosWithUsers();
    console.log(this.arrayMerged);
  }

  onTodoStatusChange(item: iTodos) {
    alert(`"${item.todo}" has been marked as completed and will be removed.`);
    console.log('id ' + item.id, item.completed);
  }
  searchValue(valueToSearch: string) {
    this.arrayMerged = this.arrayMergeService.searchValue(valueToSearch);
  }
}
