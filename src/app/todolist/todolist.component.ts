import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){
  }
}
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  // todo = {
  //   id : 1,
  //   description: "dance"
  // }
  todos = [
    new Todo(1, "play basketball", true, new Date(2023, 11, 27)),
    new Todo(2, "to be skillful in angular", false, new Date()),
    new Todo(3, "sleep well", true, new Date())
  ]
  ngOnInit(): void {
  }

}
