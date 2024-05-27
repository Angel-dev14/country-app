import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatIconButton,
    MatButton,
    ReactiveFormsModule,
  ],
  templateUrl: './login.page.html',
  styleUrl: './login.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {

  protected hide = true;
  protected form = this.#initForm;
  protected showLoginUnsuccessfulMessage = false;

  //deps
  readonly #formBuilder = inject(FormBuilder);
  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);

  ngOnInit(): void {
    this.form = this.#initForm;
  }

  protected onSubmit() {
    const user = this.form?.value;
    user && this.#authService.login(user).pipe(
      tap(success => {
        if (success) {
          this.#router.navigate(['countries']);
        } else {
          this.showLoginUnsuccessfulMessage = true;
        }
      })
    ).subscribe();
  }

  get #initForm(): FormGroup {
    return this.#formBuilder?.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

}
