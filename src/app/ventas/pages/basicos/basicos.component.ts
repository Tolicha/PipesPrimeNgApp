import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'marcial';
  nombreUpper: string = 'MARCIAL';
  nombreCompleto: string = 'mArCiAl';

  fecha: Date = new Date(); //Fecha de hoy
}
