import { Component, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
})
export class LoginPage implements OnInit {

  protected hide = true;
  protected form = this._initForm;
  protected showLoginUnsucessfulMessage = false;

  //deps
  private readonly _formBuilder = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);

  ngOnInit(): void {
    this.form = this._initForm;
  }

  onSubmit() {
    const user = this.form.value;
    this._authService.login(user).subscribe({
      next: (success) => {
        if (success) {
          this._router.navigate(['countries']);
        }
        else {
          this.showLoginUnsucessfulMessage = true;
        }
      }
    });
  }

  private get _initForm(): FormGroup {
    return this._formBuilder?.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    })
  }

}
