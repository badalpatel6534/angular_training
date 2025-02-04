import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrpTodoService {

  private tasks = [{ name: 'Learn Angular', completed: false }];

  getTasks() {
    return this.tasks;
  }

  addTask(name: string) {
    this.tasks.push({ name, completed: false });
  }

  toggleTask(task: any) {
    task.completed = !task.completed;
  }

  deleteTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }

}
