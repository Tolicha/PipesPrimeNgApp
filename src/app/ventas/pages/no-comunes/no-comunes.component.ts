import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Marcial';
  genero: string = 'masculino';
  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] =['Marcial','Marco','Jessica','David','Carlos','Borja','Romina']
  clientesMapa = {
    '=0' : 'no tenemos ningún cliente esperando.',
    '=1' : 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarPersona(){
    this.nombre = 'Jessica';
    this.genero = 'femenino'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValuePipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canada'
  }

  //JsonPipe
  heroes =[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //AsyncPipe
  miObservable = interval(1000); //Va a emitir los numeros del 0 al 1000

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve('Tenemos data de promesa')
    }, 3500);
  })
}
