import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import {HomeComponent} from './core/home/home.component';
import {TeatroListComponent} from './core/sala-teatro/teatro-list/teatro-list.component';
import {EditTeatroComponent} from './core/sala-teatro/edit-teatro/edit-teatro.component';
import {NewTeatroComponent} from './core/sala-teatro/new-teatro/new-teatro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teatro', children: [
      { path: '', component: TeatroListComponent },
      { path: 'new', component: NewTeatroComponent },
      { path: ':id', component: EditTeatroComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
