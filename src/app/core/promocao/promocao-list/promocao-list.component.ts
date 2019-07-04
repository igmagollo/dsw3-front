import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../../shared/services/user.service';
import {PromocaoService} from '../../../shared/services/promocao.service';

@Component({
  selector: 'app-promocao-list',
  templateUrl: './promocao-list.component.html',
  styleUrls: ['./promocao-list.component.sass']
})
export class PromocaoListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'preco', 'teatro_nome', 'url_site', 'dia_hora'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  hasError = false;
  isLoading = true;

  @Input() isMine: boolean;

  constructor(private user: UserService,
              private promocao: PromocaoService,
              private snack: MatSnackBar) { }

  ngOnInit() {
    if (this.isMine) {
      this.displayedColumns.push('acoes');
    }
    this.update();
  }

  update() {
    this.isLoading = true;
    this.hasError = false;
    this.promocao.index().subscribe(res => {
      if (this.isMine) {
        res = res.filter(promocao => promocao.teatro.email === this.user.getUsername());
      }
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    }, err => {
      this.hasError = true;
      this.isLoading = false;
    });
  }

  delete(id: string) {
    this.promocao.delete(id).subscribe(res => {
      this.update();
    }, err => {
      this.snack.open('Não foi possivel deletar o registro.', 'fechar',  { duration: 5000 });
    });
  }

}
