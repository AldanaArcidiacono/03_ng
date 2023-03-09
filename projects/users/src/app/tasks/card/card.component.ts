import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'isdi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() item!: Task;

  handleClick() {
    console.log('Borrando...', this.item);
  }
}
