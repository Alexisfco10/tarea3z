import { Component, OnInit } from '@angular/core';
import { NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  num: any;
  array = [];
  list: any;

  constructor() { }

  operacion() {
    var numero = parseInt(this.num);
     this.array = [];
   // eslint-disable-next-line eqeqeq
    for (let i = 1; i <= 13; i++) {
      this.list = `${numero} x ${i} = ${numero*i}`;
      this.array.push({value: this.list});
   }
  }

  ngOnInit() {
  }
}