import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})
export class ListadoComponent {

  heroes: string[]=['Spiderman','Thor','Capitan America', 'Iroman','Bruja Scarlata'];

  heroeBorrado:string='';

  borrarHeroe(){
    console.log('borrar')
    this.heroeBorrado = this.heroes.pop() || '';
    
  }
  
 
}
