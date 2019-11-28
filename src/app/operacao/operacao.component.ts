import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AdicaoAPIServiceService } from '../service/adicao-apiservice.service';

@Component({
  selector: 'has-operacao',
  templateUrl: './operacao.component.html',
  styleUrls: ['./operacao.component.css']
})
export class OperacaoComponent implements OnInit {

  formAdicao: FormGroup;

  constructor(public formBuilder: FormBuilder, public service: AdicaoAPIServiceService) { }

  ngOnInit() {
    this.formAdicao = this.formBuilder.group({
      Num1: this.formBuilder.control(''),
      Num2: this.formBuilder.control('')
    })
  }
  onProcessar() {
    let adicao: AdicaoAPIServiceService = this.formAdicao.value;
    this.service.createAdicao(AdicaoAPIServiceService)
      .subscribe(data => console.log(data),
        error => console.log(error));
  }


}
