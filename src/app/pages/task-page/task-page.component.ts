import { Component, Input } from '@angular/core';
import { TaskEmitterObject } from '../../models/taskEmitter.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent {
  tasks = [];
  fTasks = [];
  doneT = [];
  taskIDFound: Task;
  numberID = 0;

  addTask(task: string): void {
    const ID = Math.floor(Math.random() * 1000);
    const exists = this.tasks.filter((x) => x.id === ID).length;
    if (exists === 0) {
      this.tasks.push({ id: ID, name: task, done: false });
      this.fTasks.push({ id: ID, name: task, done: false });
    } else {
      this.addTask(task);
    }
  }

  filterby(param: string, value: string): void {
    if (param === 'name') {
      this.fTasks = this.tasks.filter((t) => t.name.includes(value));
    }
    if (param === 'id') {
      this.fTasks = this.tasks.filter((t) => t.id.toString().includes(value));
    }
  }
  sortArr(arr: Task[]): void {
    arr.sort(function (a, b) {
      return a.id - b.id;
    });
  }
  remove(event: TaskEmitterObject): void {
    const index = event.taskArray.indexOf(event.task);
    event.taskArray.splice(index, 1);
  }
  done(event: Task): void {
    event.done = !event.done;
    setTimeout(() => {
      const obj = { taskArray: this.fTasks, task: event };
      this.doneT.push(event);
      this.remove(obj);
    }, 2000);
  }
  undo(event: Task): void {
    event.done = !event.done;
    setTimeout(() => {
      const obj = { taskArray: this.doneT, task: event };
      this.remove(obj);
      this.fTasks.push(event);
    }, 2000);
  }
  findTask(): void {
    this.taskIDFound = this.fTasks.find((t) => t.id === +this.numberID);
  }
}
