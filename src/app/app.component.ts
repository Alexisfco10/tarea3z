import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Calculadora', url: '/calculadora', icon: 'calculator' },
    { title: 'Tabla', url: '/tabla', icon: 'cube' },
    { title: 'Traductor', url: '/traductor', icon: 'text' },
    { title: 'Video', url: '/video', icon: 'videocam' },
  ];
  constructor() {}
}
