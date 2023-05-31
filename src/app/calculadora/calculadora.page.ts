import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

num1:number = null;
num2:number = null;
resultado:string =null;

  constructor() { }

  sumar(){
    if (this.num1 != null || this.num2 != null) {
      this.resultado = (this.num1 + this.num2).toString();
    }
    
  }

  ngOnInit() {
  }

}
