import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {SiteVendaService} from '../../../shared/services/site-venda.service';
import {SiteVenda} from '../../../shared/models/site-venda';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() edit: boolean;
  private sitezinho: SiteVenda;
  submitting = false;
  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required]],
    url: [null, [Validators.required]],
    nome: [null, [Validators.required]],
    telefone: [null, [Validators.required]]
  });
  constructor(private fb: FormBuilder,
              private site: SiteVendaService,
              private snack: MatSnackBar,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.edit) {
      this.submitting = true;
      this.form.disable();
      this.site.get(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res => {
        this.sitezinho = res;
        const aux = {
          email: res.email,
          password: res.password,
          url: res.url,
          nome: res.nome,
          telefone: res.telefone
        };
        this.form.setValue(aux);
        this.submitting = false;
        this.form.enable();
      }, err => {
        this.snack.open('Não foi possível acessar o registro.', 'fechar', { duration: 5000 });
      });
    }
  }

  submit() {
    if (!this.form.valid) {
      return;
    }
    if (!this.edit) {
      this.submitting = true;
      this.form.disable();
      const aux = {
        id: undefined,
        email: this.form.getRawValue().email,
        password: this.form.getRawValue().password,
        url: this.form.getRawValue().url,
        nome: this.form.getRawValue().nome,
        telefone: this.form.getRawValue().telefone,
        username: this.form.getRawValue().email
      };
      this.site.save(aux).subscribe(res => {
        this.snack.open('Cadastro efetuado com sucesso!', 'fechar', { duration: 5000 });
        this.route.navigateByUrl('/site');
      }, err => {
        this.snack.open('Ocorreu um erro ao cadastrar :c', 'fechar', { duration: 5000 });
        this.form.enable();
        this.submitting = false;
      });
    } else {
      const form = this.form.getRawValue();
      this.sitezinho.email = form.email;
      this.sitezinho.telefone = form.telefone;
      this.sitezinho.nome = form.nome;
      this.sitezinho.url = form.url;
      this.form.disable();
      this.site.update(this.sitezinho).subscribe(res => {
        this.snack.open('Modificação efetuada com sucesso!', 'fechar', { duration: 5000 });
        this.route.navigateByUrl('/teatro');
      }, err => {
        this.snack.open('Ocorreu um erro ao modificar :c', 'fechar', { duration: 5000 });
        this.form.enable();
        this.submitting = false;
      });
    }
  }

}
