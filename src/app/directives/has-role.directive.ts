import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {

  private readonly _viewContainerRef = inject(ViewContainerRef);
  private readonly _authService = inject(AuthService);
  private readonly _templateRef = inject(TemplateRef);

  @Input() set appHasRole(value: string) {
    if (this._authService.getRole() == value) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainerRef.clear();
    }
  }

}
