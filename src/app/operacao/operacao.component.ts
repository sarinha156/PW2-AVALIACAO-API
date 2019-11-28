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
      num1: this.formBuilder.control(''),
      num2: this.formBuilder.control('')
    })
  }
  onProcessar(){
    let num1 :  string = this.formAdicao.value.num1;
    let num2 :  string = this.formAdicao.value.num2;

    this.service.getAdicao(num1, num2)
                .subscribe(data => alert(data),
                           error => console.log(error));
  }


}
