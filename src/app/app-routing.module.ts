import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodolistComponent } from './todolist/todolist.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "#", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "welcome/:name", component: WelcomeComponent },
  { path:"todos", component: TodolistComponent},
  { path: "logout", component: LogoutComponent},
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
