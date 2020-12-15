import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewListComponent } from './components/new-list/new-list.component';
import { TaskViewComponent } from './components/task-view/task-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' }, // pathMatch: 'full' -> Take full path
  { path: 'new-list', component: NewListComponent },
  { path: 'lists', component: TaskViewComponent },
  { path: 'lists/:listId', component: TaskViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
