import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports:[NgFor],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  addTask(task: string): void {
    if (task.trim()) {
      this.todos.push({ task, completed: false });
    }
  }

  completeTask(index: number): void {
    this.todos[index].completed = !this.todos[index].completed;
  }

  deleteTask(index: number): void {
    this.todos.splice(index, 1);
  }
}
