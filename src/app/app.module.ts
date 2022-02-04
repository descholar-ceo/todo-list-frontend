import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './containers/projects/projects.component';
import { TodosComponent } from './containers/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProjectComponent } from './components/project/project.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    TodosComponent,
    TodoComponent,
    ProjectComponent,
    ProjectFormComponent,
    ButtonComponent,
    ProjectDetailsComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
