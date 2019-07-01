import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.sass']
})
export class CadastroComponent implements OnInit {
  formGroup = this.fb.group({
    nome: [null, [Validators.required]],
    email: [null, [Validators.required]],
    password: [null, [Validators.required]]
  });

  isSubmitting = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
