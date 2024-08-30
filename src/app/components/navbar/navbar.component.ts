import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { InternalizationService } from '../../services/translate.service';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { LangSelectComponent } from './lang-select/lang-select.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    NgOptimizedImage,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    TranslateModule,
    LangSelectComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  onContactClick() {
    this.router.navigate([appRoutes.contact]);
  }

  onHomeClick() {
    this.router.navigate([appRoutes.home]);
  }
}
