import { Component, inject, OnInit, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { AsyncPipe } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryResponse } from '../../domain/country.response';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CountryCardComponent,
    MatProgressSpinner
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListComponent implements OnInit {

  private readonly _countryService = inject(CountryService);
  protected readonly loading = signal(true);
  countries: CountryResponse[] = [];

  ngOnInit(): void {
    this._countryService.findAllCountries().pipe(

    ).subscribe({
      next: (countries) => {
        this.countries = countries;
        this.loading.set(false);
      }
    });
  }

}
