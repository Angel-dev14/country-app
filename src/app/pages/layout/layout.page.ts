import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    NavBarComponent
  ],
  template: `
    <app-nav-bar></app-nav-bar>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: `
    main {
      margin: 1em 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPage {

}
