import { Component } from '@angular/core';
import { ArrayMergeService } from '../../array-merge.service';
import { iTodos } from '../../modules/todos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  arrayMerged!: iTodos[];
  valueToSearch!: string;

  constructor(private arrayMergeService: ArrayMergeService) {}
  ngOnInit() {
    this.arrayMerged = this.arrayMergeService.getTodosWithUsers();
    return this.arrayMerged;
  }
  //per controllare che il cambio colore sia dovuto al cambio di true/false
  logChange(item: any) {
    console.log('id ' + item.id, item.completed);
  }

  searchValue(valueToSearch: string) {
    this.arrayMerged = this.arrayMergeService.searchValue(valueToSearch);
  }
}
