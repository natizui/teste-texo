import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export const manufactureDateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const manufactureDate = control.get('manufactureDate');
  const expirationDate = control.get('expirationDate');
  
  return manufactureDate && expirationDate && expirationDate.value && expirationDate.value < manufactureDate.value ? { 'manufactureDateInvalid': true} : null;
}