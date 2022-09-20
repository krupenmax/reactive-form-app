import { AbstractControl } from '@angular/forms';

export function validatePassword(control: AbstractControl) {
  if (/\d/.test(control.value)) {
    return { invalidUrl: true };
  }
  return null;
}