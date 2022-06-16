import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true;

  heroes: Heroe [] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

  cambiarBooleanMayusculas(){
    this.enMayusculas = !this.enMayusculas;
    // if (this.enMayusculas) {
    //   this.enMayusculas = false;
    //  }else{
    //   this.enMayusculas = true;
    //  }
    //  return this.enMayusculas;
  }
}