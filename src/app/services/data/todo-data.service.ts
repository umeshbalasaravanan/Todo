import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todolist/todolist.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveTodoData(name: string | null) {
    return this.httpClient.get<Todo[]>(`http://localhost:8080/users/${name}/todos`);
    // console.log("execute hello world bean service");
  }
}
