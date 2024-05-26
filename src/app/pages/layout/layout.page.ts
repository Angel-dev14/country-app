import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    NavBarComponent
  ],
  templateUrl: './layout.page.html',
  styleUrl: './layout.page.scss'
})
export class LayoutPage {

}
