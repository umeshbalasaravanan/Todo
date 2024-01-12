import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../todolist/todolist.component';
import { data } from 'cypress/types/jquery';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
[x: string]: any;
  //username: string | undefined
  constructor(private activatedRoute: ActivatedRoute,
    private todoDataService: TodoDataService,
    private router: Router) { }
  id: number = 0;
  todo!: Todo
  ngOnInit(): void {
    let user = sessionStorage.getItem('authenticatedUser');
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(this.id, "", false, new Date())
    if (this.todo.id != -1) {
      this.todoDataService.retrieveTodo(user, this.id).subscribe(
        response => {
          this.todo = response
        }
      )
    }
  }

  saveTodo() {
    if (this.todo.id === -1) {
      let user = sessionStorage.getItem('authenticatedUser');
      this.id = this.activatedRoute.snapshot.params['id'];
      this.todoDataService.addTodo(user, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    } else {
      let user = sessionStorage.getItem('authenticatedUser');
      this.id = this.activatedRoute.snapshot.params['id'];
      this.todoDataService.updateTodo(user, this.id, this.todo).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
  }
}
