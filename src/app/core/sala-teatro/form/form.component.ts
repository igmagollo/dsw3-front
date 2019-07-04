import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {SalaTeatroService} from '../../../shared/services/sala-teatro.service';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {SalaTeatro} from '../../../shared/models/sala-teatro';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Input() edit: boolean;
  private teatrinho: SalaTeatro;
  submitting = false;
  form = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, [Validators.required]],
    cnpj: [null, [Validators.required]],
    nome: [null, [Validators.required]],
    cidade: [null, [Validators.required]]
  });
  constructor(private fb: FormBuilder,
              private teatro: SalaTeatroService,
              private snack: MatSnackBar,
              private route: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this.edit) {
      this.submitting = true;
      this.form.disable();
      this.teatro.get(this.activatedRoute.snapshot.paramMap.get('id')).subscribe(res => {
        this.teatrinho = res;
        const aux = {
          email: res.email,
          password: res.password,
          cnpj: res.cnpj,
          nome: res.nome,
          cidade: res.cidade
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
        email: this.form.getRawValue().email,
        password: this.form.getRawValue().password,
        cnpj: this.form.getRawValue().cnpj,
        nome: this.form.getRawValue().nome,
        cidade: this.form.getRawValue().cidade,
        username: this.form.getRawValue().email
      };
      this.teatro.save(aux).subscribe(res => {
        this.snack.open('Cadastro efetuado com sucesso!', 'fechar', { duration: 5000 });
        this.route.navigateByUrl('/teatro');
      }, err => {
        this.snack.open('Ocorreu um erro ao cadastrar :c', 'fechar', { duration: 5000 });
        this.form.enable();
        this.submitting = false;
      });
    } else {
      const form = this.form.getRawValue();
      this.teatrinho.email = form.email;
      this.teatrinho.cidade = form.cidade;
      this.teatrinho.nome = form.nome;
      this.teatrinho.cnpj = form.cnpj;
      this.form.disable();
      this.teatro.update(this.teatrinho).subscribe(res => {
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
