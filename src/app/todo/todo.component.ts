import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
filter: string = "";
todos: Todo[];

  constructor() { 
  this.todos = [
    {task: "fold clothes", completed: true,},
    {task:"put clothes in dresser", completed: true,},
    {task:"relax", completed: false,},
    {task:"try to pet the cat", completed: false,},
    {task:"pet dog", completed: true,},
    {task:"be awesome", completed: true,},
  ]; 

} 
completeTask = function(todo: Todo): void {
  todo.completed = true;

}
removeTask = function(task: string): void {
  let remove = this.todos.findIndex(function(todo){
    return todo.task === task;
  });
  this.todos.splice(remove, 1);
}
addTask = function(todo:string): void {
  console.log(todo);
  let newTask = {
    task: todo, completed: false}
    this.todos.push(newTask)
}
getFilteredResults(): Todo[] {
  return this.todos.filter((todo) => {
    return todo.task.includes(this.filter);
    });
  }
}

