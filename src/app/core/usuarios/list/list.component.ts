import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

const data = [
  {nome: 'igor', email: 'igraphmagollo@gmail.com', senha: 'x22qpqaw'},
  {nome: 'olivato', email: 'olivatooo@gmail.com', senha: '123456789'}
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'senha', 'acoes'];
  dataSource = new MatTableDataSource<any>(data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
