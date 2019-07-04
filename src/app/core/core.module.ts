import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {SalaTeatroModule} from './sala-teatro/sala-teatro.module';
import {SiteVendaModule} from './site-venda/site-venda.module';

@NgModule({
  declarations: [
    NavigationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    RouterModule,
    MatCardModule,
    MatProgressBarModule,
    SharedModule,
    SalaTeatroModule,
    SiteVendaModule,
  ],
  exports: [
    NavigationComponent,
    LoginComponent,
    HomeComponent,
    SalaTeatroModule,
    SiteVendaModule,
  ]
})
export class CoreModule { }
