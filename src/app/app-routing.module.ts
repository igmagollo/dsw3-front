import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './core/login/login.component';
import {HomeComponent} from './core/home/home.component';
import {TeatroListComponent} from './core/sala-teatro/teatro-list/teatro-list.component';
import {EditTeatroComponent} from './core/sala-teatro/edit-teatro/edit-teatro.component';
import {NewTeatroComponent} from './core/sala-teatro/new-teatro/new-teatro.component';
import {SiteListComponent} from './core/site-venda/site-list/site-list.component';
import {NewSiteComponent} from './core/site-venda/new-site/new-site.component';
import {EditSiteComponent} from './core/site-venda/edit-site/edit-site.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teatro', children: [
      { path: '', component: TeatroListComponent },
      { path: 'new', component: NewTeatroComponent },
      { path: ':id', component: EditTeatroComponent }
    ]},
  { path: 'site', children: [
      { path: '', component: SiteListComponent },
      { path: 'new', component: NewSiteComponent },
      { path: ':id', component: EditSiteComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
