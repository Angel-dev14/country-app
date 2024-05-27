import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { CountryDetailsResponse } from '../domain/country-details.response';
import { CountryResponse } from '../domain/country.response';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  readonly #http = inject(HttpClient);
  readonly #path = 'https://restcountries.com/v3.1';

  findAllCountries(): Observable<CountryResponse[]> {
    const params = new HttpParams()
      .set('fields', 'name,capital,currencies,region,population,cca2,flags');
    return this.#http.get<CountryResponse[]>(`${this.#path}/all`, { params });
  }

  findCountryDetails(countryIsoCode: string): Observable<CountryDetailsResponse> {
    return this.#http.get<CountryDetailsResponse[]>(`${this.#path}/alpha/${countryIsoCode}`).pipe(
      map(response => response[0]),
      catchError((err) => {
        console.log(err);
        return EMPTY;
      })
    );
  }

}
