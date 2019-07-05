import {Component, Input, OnInit} from '@angular/core';
import {Promocao} from '../../../shared/models/promocao';
import {FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {PromocaoService} from '../../../shared/services/promocao.service';
import { forkJoin } from 'rxjs';
import {SalaTeatroService} from '../../../shared/services/sala-teatro.service';
import {SiteVendaService} from '../../../shared/services/site-venda.service';
import {SiteVenda} from '../../../shared/models/site-venda';
import {SalaTeatro} from '../../../shared/models/sala-teatro';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() edit: boolean;
  private promocaozinha: Promocao;
  sites: SiteVenda[];
  salas: SalaTeatro[];
  submitting = false;
  form = this.fb.group({
    site: [null, [Validators.required]],
    preco: [null, [Validators.required]],
    nome: [null, [Validators.required]],
    dia_hora: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder,
              private promocao: PromocaoService,
              private snack: MatSnackBar,
              private route: Router,
              private activatedRoute: ActivatedRoute,
              private teatro: SalaTeatroService,
              private site: SiteVendaService,
              private user: UserService) { }

  ngOnInit() {
    if (this.edit) {
      this.submitting = true;
      this.form.disable();
      forkJoin([
        this.promocao.get(this.activatedRoute.snapshot.paramMap.get('id')),
        this.teatro.index(),
        this.site.index()
      ]).subscribe(res => {
        this.salas = res[1];
        this.sites = res[2];
        this.promocaozinha = res[0];
        const aux = {
          site: this.promocaozinha.site.id,
          preco: this.promocaozinha.preco,
          nome: this.promocaozinha.nome,
          dia_hora: this.promocaozinha.dia_hora.replace(' ', 'T')
        };
        this.form.setValue(aux);
        this.submitting = false;
        this.form.enable();
      }, err => {
        this.snack.open('Não foi possível acessar o registro.', 'fechar', { duration: 5000 });
      });
    } else {
      this.submitting = true;
      this.form.disable();
      forkJoin([
        this.teatro.index(),
        this.site.index()
      ]).subscribe(res => {
        this.salas = res[0];
        this.sites = res[1];
        this.submitting = false;
        this.form.enable();
      }, err => {
        this.snack.open('Não foi possível buscar informações.', 'fechar', { duration: 5000 });
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
      const teatro: SalaTeatro = this.salas.find(sala => sala.email === this.user.getUsername());
      const aux: Promocao = {
        id: undefined,
        nome: this.form.getRawValue().nome,
        site: this.sites.find(site => site.id === this.form.getRawValue().site),
        teatro,
        preco: this.form.getRawValue().preco,
        dia_hora: this.form.getRawValue().dia_hora.replace('T', ' ')
      };
      this.promocao.save(aux).subscribe(res => {
        this.snack.open('Cadastro efetuado com sucesso!', 'fechar', { duration: 5000 });
        this.route.navigateByUrl('/promocao/mine');
      }, err => {
        if (err.error === 'Conflito date') {
          this.snack.open('Já existe uma promoção para este teatro neste dia.', 'fechar', { duration: 5000 });
        } else {
          this.snack.open('Ocorreu um erro ao cadastrar :c', 'fechar', { duration: 5000 });
        }
        this.form.enable();
        this.submitting = false;
      });
    } else {
      const form = this.form.getRawValue();
      this.promocaozinha.nome = form.nome;
      this.promocaozinha.preco = form.preco;
      this.form.disable();
      this.promocao.update(this.promocaozinha).subscribe(res => {
        this.snack.open('Modificação efetuada com sucesso!', 'fechar', { duration: 5000 });
        this.route.navigateByUrl('/promocao/mine');
      }, err => {
        this.snack.open('Ocorreu um erro ao modificar :c', 'fechar', { duration: 5000 });
        this.form.enable();
        this.submitting = false;
      });
    }
  }

}
