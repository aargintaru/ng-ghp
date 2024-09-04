import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export function dateNotBeforeTodayValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const today = new Date();
    const controlDate = new Date(
      control.value.year,
      control.value.month - 1,
      control.value.day
    );
    return controlDate < today
      ? { dateNotBeforeToday: { value: control.value } }
      : null;
  };
}

export function endDateAfterStartDateValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const formGroup = control as FormGroup;
    const startDate = formGroup.get('startDate')?.value;
    const endDate = formGroup.get('endDate')?.value;

    if (!startDate || !endDate) {
      return null;
    }

    const start = new Date(startDate.year, startDate.month - 1, startDate.day);
    const end = new Date(endDate.year, endDate.month - 1, endDate.day);

    return end <= start ? { endDateNotAfterStartDate: true } : null;
  };
}
