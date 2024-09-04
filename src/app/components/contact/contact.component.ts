import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { appRoutes } from '../../app.routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  dateNotBeforeTodayValidator,
  endDateAfterStartDateValidator,
} from './validators/date.validator';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    NgbDatepickerModule,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  today = inject(NgbCalendar).getToday();

  contactForm: FormGroup;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        startDate: ['', [Validators.required, dateNotBeforeTodayValidator()]],
        endDate: ['', [Validators.required, dateNotBeforeTodayValidator()]],
        comment: [''],
      },
      { validators: endDateAfterStartDateValidator() }
    );
  }

  get email() {
    return this.contactForm.get('email');
  }

  get endDateNotAfterStartDate() {
    return this.contactForm.errors?.['endDateNotAfterStartDate'];
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      console.error('Form is invalid');
      return;
    }

    let email = form.get('email')?.value;
    let startDate = form.get('startDate')?.value;
    let endDate = form.get('endDate')?.value;
    let interval = `From ${startDate.day}/${startDate.month}/${startDate.year} To ${endDate.day}/${endDate.month}/${endDate.year}`;
    let comment = form.get('comment')?.value;

    this.httpClient
      .post('https://formspree.io/f/mdknjgep', {
        email: email,
        interval: interval,
        comment: comment,
      })
      .subscribe({
        next: () => {
          console.log('Email sent successfully');
          this.router.navigate([appRoutes.home]);
        },
        error: (error) => {
          console.error('Error sending email', error);
        },
      });
  }
}
