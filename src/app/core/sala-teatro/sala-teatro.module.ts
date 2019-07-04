import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeatroListComponent } from './teatro-list/teatro-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatMenuModule,
  MatPaginatorModule, MatProgressBarModule, MatSnackBarModule, MatSortModule,
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormComponent } from './form/form.component';
import { EditTeatroComponent } from './edit-teatro/edit-teatro.component';
import { NewTeatroComponent } from './new-teatro/new-teatro.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TeatroListComponent,
    FormComponent,
    EditTeatroComponent,
    NewTeatroComponent,
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
  ]
})
export class SalaTeatroModule { }
