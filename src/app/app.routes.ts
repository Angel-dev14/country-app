import { Routes } from '@angular/router';
import { LayoutPage } from './pages/layout/layout.page';
import { LoginPage } from './pages/login/login.page';
import { AuthGuard } from './guards/auth.guard';
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'countries',
        component: CountryListComponent,
        pathMatch: 'full',
      },
      {
        path: 'countries/:countryIsoCode',
        component: CountryDetailsComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginPage,
  }
];
