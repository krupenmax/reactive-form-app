import { AbstractControl, ControlContainer, FormControl } from "@angular/forms";

export function validatePassword(control: AbstractControl) {
  let hasUpperCases = false;
  for (let i = 0; i < control.value.length; i++) {
    if (control.value[i].toUpperCase() === control.value[i] && control.value[i].match(/[a-z]/i)) {
      hasUpperCases = true;
    }
  }
  if (/\d/.test(control.value) && hasUpperCases === true) {
    return null;
  }
  else {
    return { invalidPassword: true };
  }
}

export function validatePlus(control: AbstractControl) {
  if (control.value[0] === "+" || control.value === "") {
    return null;
  }
  else {
    return { invalidFormat: true };
  }
}

export function validatePhoneNum(control: AbstractControl) {
  let tmp: string = "";
  for (let i: number = 1; i < control.value.length; i++) {
    tmp += control.value[i];
  }
  if (/^[0-9]+$/.test(tmp) || tmp === "") {
    return null;
  }
  else {
    return { invalidInput: true };
  }
}

export function validateSimilarity(control: AbstractControl) {
  control: AbstractControl;
  return control.value === control.parent?.get("password")?.value ? null: { invalidSimilarity: true };
}
