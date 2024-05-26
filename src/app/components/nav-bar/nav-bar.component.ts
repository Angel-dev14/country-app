import { Component, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatToolbarModule,
    RouterLink,
    MatButton
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  logout() {
    this._authService.logout().subscribe({
      next: (success) => {
        if(success) {
          this._router.navigate(['login']);
        }
      }
    });
  }

}
