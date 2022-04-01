import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemon';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetPokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(i: number): Observable<Pokemon> {
    return this.http
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .pipe(
        //tap((data) => console.log('Pokemon:', data)),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(err);
  }
}
