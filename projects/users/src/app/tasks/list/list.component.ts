import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { getTasks } from '../services/mock.data';

@Component({
  selector: 'isdi-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks: Task[];
  constructor() {
    this.tasks = [];
  }

  async ngOnInit(): Promise<void> {
    this.tasks = await getTasks(); // Es como conectar a un servicio
    console.log(this.tasks);
  }
}
