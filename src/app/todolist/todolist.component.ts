import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../services/data/todo-data.service';
import { ActivatedRoute } from '@angular/router';
export class Todo {
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date) {
  }
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  // todo = {
  //   id : 1,
  //   description: "dance"
  // }
  todos: Todo[] | undefined;
  username: string | undefined;
  message = "";
  //   new Todo(1, "play basketball", true, new Date(2023, 11, 27)),
  //   new Todo(2, "to be skillful in angular", false, new Date()),
  //   new Todo(3, "sleep well", true, new Date())
  // ]
  ngOnInit(): void {
    this.refreshTodos();
  }
  refreshTodos() {
    let user = sessionStorage.getItem('authenticatedUser')
    console.log("user after entering into todos page: " + user)
    this.todoDataService.retrieveTodoData(user).subscribe(
      response => {
        this.todos = response;
      }
    )
  }
  deleteTodo(id: number) {
    let user = sessionStorage.getItem("authenticatedUser");
    console.log("todo that need to be deleted: " + id);
    this.todoDataService.deleteTodoData(user, id).subscribe(
      response => {
        this.message = `Deletion of Todo ${id} is successful`
        this.refreshTodos()
      }
    )
  }
}
