import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { AsyncPipe } from '@angular/common';
import { CountryCardComponent } from './country-card/country-card.component';
import { CountryResponse } from '../../domain/country.response';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { finalize, Observable } from 'rxjs';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    AsyncPipe,
    CountryCardComponent,
    MatProgressSpinner
  ],
  template: `
    @if (loading()) {
      <div class='spinner'>
        <mat-spinner></mat-spinner>
      </div>
    }

    @for (country of countries$ | async; track country.cca2) {
      <app-country-card
        [country]='country'
      ></app-country-card>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 9px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent {

  readonly #countryService = inject(CountryService);
  protected readonly loading = signal(true);
  countries$: Observable<CountryResponse[]> = this.#countryService.findAllCountries().pipe(
    finalize(() => this.loading.set(false))
  );

}
