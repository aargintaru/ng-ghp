import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const appRoutes = {
  home: 'home',
  about: 'about',
  bikes: 'bikes',
  contact: 'contact',
};

export const routes: Routes = [
  { path: '', redirectTo: appRoutes.home, pathMatch: 'full' },
  {
    path: appRoutes.home,
    component: HomeComponent,
  },
  //   { path: appRoutes.main, component: MainComponent, canActivate: [AuthGuard] },
  //   {
  //     path: appRoutes.register,
  //     component: RegisterComponent,
  //     canActivate: [LoginGuard],
  //   },
  //   {
  //     path: appRoutes.confirmEmail,
  //     component: ConfirmEmailComponent,
  //   },
];
