import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  appName: string = 'fundamentals-app';
  angularLogo: string =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  btnDisabled: boolean = true;
  email: string = 'edu@eml.run';

  mostrarAlerta() {
    alert('Alerta ⚠️');
  }

  contadorOvejas: number = 0;

  contarOveja() {
    this.contadorOvejas += 1;
  }

  establecerOvejas(event: Event) {
    const element = event.target as HTMLInputElement;

    try {
      const numeroOvejas: number = parseInt(element.value);
      if (numeroOvejas > 0) {
        this.contadorOvejas = numeroOvejas;
      }
    } catch {
      console.log('No es un número');
    }
  }

  persona: any = {
    nombre: '',
  };

  listaPersonas: string[] = [];

  agregarPersona(): void {
    this.listaPersonas.push(this.persona.nombre);
    this.persona.nombre = '';
  }

  borrarPersona(index: number): void {
    this.listaPersonas.splice(index, 1);
  }

  miPokedex: Pokemon[] = [];

  randoomPokemons: any;

  async ngOnInit() {

    await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${Math.floor(Math.random() * 501)}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.miPokedex = data.results;
      });
      /*
      AQUÍ PUEDES CONTINUAR CON EL EJERCICIO PARA OBTENER LA IMAGEN DEL POKÉMON
        -> Recuerda revisar el API de https://pokeapi.co/ <-
      */
    await this.obtenerImagenes();
  }

  async obtenerImagenes() : Promise<void> {
    for (let i = 0; i < this.miPokedex.length; i++) {
      try {
        await fetch(this.miPokedex[i].url)
          .then((response) => response.json())
          .then((data) => {
            console.log(
              'Esta es la imagen de la lista:',
              data.sprites.front_default
            );
            this.miPokedex[i].imagen = data.sprites.front_default;
          });
      } catch (error) {
        console.error('Error al obtener la imagen:', error);
      }
    }
  }

  nuevoPokemon: string = '';
}
