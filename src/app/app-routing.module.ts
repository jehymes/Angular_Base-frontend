import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Views
import { HomeComponent } from "./views/home/home.component"
import { TasksComponent } from "./views/tasks/tasks.component"
import { AnnotationsComponent } from "./views/annotations/annotations.component"
import { TasksCreateComponent } from './components/tasks/tasks-create/tasks-create.component';
import { TasksUpdateComponent } from './components/tasks/tasks-update/tasks-update.component';
import { TasksDeleteComponent } from './components/tasks/tasks-delete/tasks-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "tasks",
  component: TasksComponent
}, {
  path: "annotations",
  component: AnnotationsComponent
}, {
  path: "tasks/createTasks",
  component: TasksCreateComponent
},{
  path: "tasks/task-update/:id",
  component: TasksUpdateComponent
},{
  path: "tasks/task-delete/:id",
  component: TasksDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
