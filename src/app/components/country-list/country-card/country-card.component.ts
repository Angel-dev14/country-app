import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';
import { CountryResponse } from '../../../domain/country.response';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatTooltip
  ],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent {

  @Input() country!: CountryResponse;

  readonly #router = inject(Router);
  readonly #route = inject(ActivatedRoute);

  protected navigateCountryDetails() {
    this.#router.navigate([this.country.cca2], {
      relativeTo: this.#route
    })
  }
}
