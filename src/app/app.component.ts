import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>', // because the length of the html is short, I'm declaring it inline,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
}
