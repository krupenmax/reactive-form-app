import { AbstractControl, ControlContainer } from '@angular/forms';

export function validatePassword(control: AbstractControl) {
  let hasUpperCases = false;
  for (let i = 0; i < control.value.length; i++) {
    if (control.value[i].toUpperCase() === control.value[i] && control.value[i].match(/[a-z]/i)) {
      hasUpperCases = true;
    }
  }
  if (/\d/.test(control.value) && hasUpperCases === true) {
    return { invalidPassword: false };
  }
  else
  {
    return { invalidPassword: true };
  }
}

export function validatePlus(control: AbstractControl) {
  if (control.value[0] != '+') {
    return { invalidFormat: true };
  }
  else {
    return { invalidFormat: false };
  }
}

export function validatePhoneNum(control: AbstractControl) {
  let tmp: string = "";
  for (let i: number = 1; i < control.value.length; i++) {
    tmp += control.value[i];
  }
  if (/^[0-9]+$/.test(tmp)) {
    return { invalidInput: false };
  }
  else {
    return { invalidInput: true};
  }
}