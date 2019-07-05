import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from '@angular/material';
import {UserService} from '../../../shared/services/user.service';
import {SiteVendaService} from '../../../shared/services/site-venda.service';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.sass']
})
export class SiteListComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'email', 'url', 'telefone'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  hasError = false;
  isLoading = true;

  constructor(private user: UserService,
              private snack: MatSnackBar,
              private site: SiteVendaService) { }

  ngOnInit() {
    if (this.user.getRole() === 'ROLE_ADMIN') {
      this.displayedColumns.push('acoes');
    }
    this.update();
  }

  isAdmin() {
    return this.user.getRole() === 'ROLE_ADMIN';
  }

  update() {
    this.isLoading = true;
    this.hasError = false;
    this.site.index().subscribe(res => {
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
    this.site.delete(id).subscribe(res => {
      this.update();
    }, err => {
      this.snack.open('Não foi possivel deletar o registro.', 'fechar',  { duration: 5000 });
    });
  }

}
