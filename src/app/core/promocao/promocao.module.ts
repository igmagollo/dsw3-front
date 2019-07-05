import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromocaoListComponent } from './promocao-list/promocao-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import { MinhasPromocoesComponent } from './minhas-promocoes/minhas-promocoes.component';
import { FormComponent } from './form/form.component';
import { EditPromocaoComponent } from './edit-promocao/edit-promocao.component';
import { NewPromocaoComponent } from './new-promocao/new-promocao.component';

@NgModule({
  declarations: [
    PromocaoListComponent,
    MinhasPromocoesComponent,
    FormComponent,
    EditPromocaoComponent,
    NewPromocaoComponent
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
    MatProgressBarModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    MatSelectModule,
  ]
})
export class PromocaoModule { }
