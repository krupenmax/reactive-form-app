import { AbstractControl, AbstractFormGroupDirective, ControlContainer, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validatePasswordNum(control: AbstractControl) {
  // for (let i = 0; i < control.value.length; i++) {
  //   if (control.value[i].toUpperCase() === control.value[i] && control.value[i].match(/[a-z]/i)) {
  //     hasUpperCases = true;
  //   }
  // }
  if (/\d/.test(control.value)) {
    return null;
  }
  else {
    return { invalidPassword: true };
  }
}

export function validatePasswordUppercase(control: AbstractControl) {
  for (let i = 0; i < control.value.length; i++) {
    if (control.value[i].toUpperCase() === control.value[i] && control.value[i].match(/[a-z]/i)) {
      return null;
    }
  }
  return { invalidPasswordUpperCase: true };
}

export function validatePlus(control: AbstractControl) {
  console.log(control.errors);
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

export const validateSimilarity: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password");
  const passwordReenter = control.get("passwordReenter");
  return password?.value === passwordReenter?.value ? null : { invalidSimilarity: true };
};
