import { NgModule } from '@angular/core';
import { CoreModule } from './../core/core/core.module';


import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';


@NgModule({
  declarations: [TodoDashboardComponent, TodoListComponent, TodoComponent],
  exports: [TodoDashboardComponent, TodoListComponent, TodoComponent],
  imports: [
    CoreModule    
  ]
})
export class TodoModule { }
