import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'Hulk', 'Thor', 'Batman', 'Thanos', 'Capitan'];
  delete: string = '';

  borrarHeroe(): void {
    this.delete = this.heroes.shift() || '';

  }
}
