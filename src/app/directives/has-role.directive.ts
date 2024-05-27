import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {

  readonly #viewContainerRef = inject(ViewContainerRef);
  readonly #authService = inject(AuthService);
  readonly #templateRef = inject(TemplateRef);

  @Input() set appHasRole(value: string) {
    if (this.#authService.getRole() == value) {
      this.#viewContainerRef.createEmbeddedView(this.#templateRef);
    } else {
      this.#viewContainerRef.clear();
    }
  }

}
