import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CountryDetailsResponse } from '../../domain/country-details.response';
import { CountryService } from '../../services/country.service';
import { CommonModule } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatButton } from '@angular/material/button';
import { HasRoleDirective } from '../../directives/has-role.directive';

@Component({
  selector: 'app-country-details',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltip,
    MatCardModule,
    MatProgressSpinner,
    MatButton,
    HasRoleDirective,
    RouterLink
  ],
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryDetailsComponent implements OnInit {

  readonly #route = inject(ActivatedRoute);
  readonly #countryService = inject(CountryService);
  protected countryDetails: CountryDetailsResponse | null = null;
  protected readonly loader = signal(true);

  ngOnInit(): void {
    const isoCode = this.#route.snapshot.params['countryIsoCode'];
    if (isoCode) {
      this.#countryService.findCountryDetails(isoCode).subscribe({
        next: (response) => {
          this.countryDetails = response;
          this.loader.set(false);
        }
      })
    }
  }
}
