import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbarModule,
    RouterLink,
    MatButton
  ],
  template: `
    <mat-toolbar color='secondary'>
      <mat-toolbar-row>
        <a routerLink='countries'>Country App</a>
        <span class="spacer"></span>
        <a routerLink='countries'>All Countries</a>
        <span class="spacer"></span>
        <button mat-raised-button color='primary' (click)='logout()'>
          Logout
        </button>
      </mat-toolbar-row>
    </mat-toolbar>
  `,
  styles: `
    .spacer {
      flex: 1 1 auto;
    }

    a {
      text-decoration: none;
    }

    @media (max-width: 424px) {
      mat-toolbar, button {
        font-size: 16px;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {

  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);

  protected logout() {
    this.#authService.logout().pipe(
      tap(success => {
        if(success) {
          this.#router.navigate(['login']);
        }
      })
    ).subscribe();
  }

}
