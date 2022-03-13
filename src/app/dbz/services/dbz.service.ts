import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'vegeta',
            poder: 50505505,

        },
        {
            nombre: 'Goku',
            poder: 432,
        }


    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    constructor() {

    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }


}