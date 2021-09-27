import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskEmitterObject } from '../models/taskEmitter.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'table-component',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.scss'],
})
export class TableTaskComponent implements OnInit {
  @Input() data;
  @Input() label: string;
  @Output() removeEmmitter: EventEmitter<TaskEmitterObject> =
    new EventEmitter<TaskEmitterObject>();
  @Output() checkEmitter: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() {}

  ngOnInit(): void {}

  remove(data: Task[], task: Task): void {
    const obj = { taskArray: data, task: task };
    this.removeEmmitter.emit(obj);
  }
  done(task: Task) {
    this.checkEmitter.emit(task);
  }
}
