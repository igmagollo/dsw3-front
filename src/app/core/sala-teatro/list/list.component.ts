import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../../shared/services/user.service';
import {SalaTeatroService} from '../../../shared/services/sala-teatro.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'cnpj', 'cidade'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  hasError = false;
  isLoading = true;

  constructor(private user: UserService,
              private teatro: SalaTeatroService,
              private snack: MatSnackBar) { }

  ngOnInit() {
    if (this.user.getRole() === 'ROLE_ADMIN') {
      this.displayedColumns.push('acoes');
    }
    this.update();
  }

  update() {
    this.isLoading = true;
    this.hasError = false;
    this.teatro.all().subscribe(res => {
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
    this.teatro.delete(id).subscribe(res => {
      this.update();
    }, err => {
      this.snack.open('Não foi possivel deletar o registro.', 'fechar',  { duration: 5000 });
    });
  }

}
