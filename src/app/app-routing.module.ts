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
import {PromocaoListComponent} from './core/promocao/promocao-list/promocao-list.component';
import {MinhasPromocoesComponent} from './core/promocao/minhas-promocoes/minhas-promocoes.component';
import {NewPromocaoComponent} from './core/promocao/new-promocao/new-promocao.component';
import {EditPromocaoComponent} from './core/promocao/edit-promocao/edit-promocao.component';
import {RoleGuard} from './shared/guards/role.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'teatro', children: [
      { path: '', component: TeatroListComponent },
      { path: 'new', component: NewTeatroComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_ADMIN']
        } },
      { path: ':id', component: EditTeatroComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_ADMIN']
        } }
    ]},
  { path: 'site', children: [
      { path: '', component: SiteListComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_ADMIN']
        } },
      { path: 'new', component: NewSiteComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_ADMIN']
        } },
      { path: ':id', component: EditSiteComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_ADMIN']
        } }
    ], canActivate: [RoleGuard], data: {
      roles: ['ROLE_ADMIN']
    }},
  { path: 'promocao', children: [
      { path: '', component: PromocaoListComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_TEATRO', 'ROLE_SITE', 'ROLE_ADMIN']
        } },
      { path: 'mine', component: MinhasPromocoesComponent, canActivate: [RoleGuard], data: {
        roles: ['ROLE_TEATRO']
        } },
      { path: 'new', component: NewPromocaoComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_TEATRO']
        }  },
      { path: ':id', component: EditPromocaoComponent, canActivate: [RoleGuard], data: {
          roles: ['ROLE_TEATRO']
        }  },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
