import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './user/list-user/list-user.component';

const routes: Routes = [
  { path: 'news', component: ListUserComponent},
  { path: 'covid', component: ListUserComponent},
  { path: 'movies', component: ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
