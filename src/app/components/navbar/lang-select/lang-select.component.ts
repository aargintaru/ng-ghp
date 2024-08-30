import { Component } from '@angular/core';
import { InternalizationService } from '../../../services/translate.service';
import { NgOptimizedImage } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-lang-select',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatButtonToggleModule],
  templateUrl: './lang-select.component.html',
  styleUrl: './lang-select.component.scss',
})
export class LangSelectComponent {
  selectedLang: string;

  constructor(private internalization: InternalizationService) {
    this.selectedLang = this.internalization.getCurrentLanguage();
  }

  switchLanguage(selectedLang: string) {
    this.selectedLang = selectedLang;
    console.log('Switching language to: ', selectedLang);
    this.internalization.switchLanguage(selectedLang);
  }
}
