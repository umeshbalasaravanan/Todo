import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../services/data/todo-data.service';
import { Todo } from '../todolist/todolist.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  //username: string | undefined
  constructor(private activatedRoute: ActivatedRoute, 
    private todoDataService: TodoDataService) { }
  id: number = 0;
  todo!:Todo
  ngOnInit(): void {
    let user = sessionStorage.getItem('authenticatedUser');
    this.id = this.activatedRoute.snapshot.params['id'];
    this.todo = new Todo(0, "", false, new Date())
    this.todoDataService.retrieveTodo(user, this.id).subscribe(
      response => {
        this.todo = response
      }
    )
  }

  saveTodo() {
    throw new Error('Method not implemented.');
    }
}
