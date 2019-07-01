import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatProgressBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatMenuModule,
} from '@angular/material';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { UsuariosComponent } from './usuarios.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    CadastroComponent,
    UsuariosComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    FlexLayoutModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
