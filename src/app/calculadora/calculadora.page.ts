import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

num1:string = null;
num2:string = null;
resultado:string =null;

  constructor() { }

  sumar(){
    this.resultado = (parseInt(this.num1)+parseInt(this.num2)).toString();
  }

  ngOnInit() {
  }

}
