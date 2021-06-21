import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', ' Ironman', 'Hulk', 'Thor','Capitan America']; 
  heroeBorrado : String = "";
  respuesta: boolean = false;

  borrarHeroe():void{
   
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
