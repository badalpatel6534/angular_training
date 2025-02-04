import { Component, ChangeDetectorRef } from '@angular/core';
import { SrpTodoService } from '../../services/srp-todo.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SrpHighlightDirective } from '../../directives/srp-highlight.directive';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-srp',
  standalone: true,
  imports: [
    NgFor, 
    NgIf, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    SrpHighlightDirective,
  ],
  templateUrl: './srp.component.html',
  styleUrl: './srp.component.scss'
})
export class SrpComponent {
  newTask = '';

  constructor(public srpTodoService: SrpTodoService, private cdr: ChangeDetectorRef) {}

  addTask() {
    if (this.newTask.trim()) {
      this.srpTodoService.addTask(this.newTask);
      this.newTask = '';
      this.cdr.detectChanges();
    }
  }

  toggleTask(task: any) {
    this.srpTodoService.toggleTask(task);
    this.cdr.detectChanges();
  }

  deleteTask(task: any) {
    this.srpTodoService.deleteTask(task);
    this.cdr.detectChanges();
  }

}
