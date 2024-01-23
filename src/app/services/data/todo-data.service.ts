import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { app_url } from 'src/app/app.constants';
import { Todo } from 'src/app/todolist/todolist.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient: HttpClient) { }

  retrieveTodos(name: string | null) {
    return this.httpClient.get<Todo[]>(`${app_url}/users/${name}/todos`);
    // console.log("execute hello world bean service");
  }

  deleteTodoData(username: string | null, id: number){
    return this.httpClient.delete(`${app_url}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string | null, id: number){
    return this.httpClient.get<Todo>(`${app_url}/users/${username}/todos/${id}`);
  }
  updateTodo(username: string | null, id: number, todo: Todo){
    return this.httpClient.put(`${app_url}/users/${username}/todos/${id}`, todo);
  }
  addTodo(username: string | null, todo: Todo){
    return this.httpClient.post(`${app_url}/users/${username}/todos`, todo);
  }
}
