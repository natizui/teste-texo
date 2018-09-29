import { ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export const perishableExpirationDateValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const isPerishable = control.get('isPerishable');
  const expirationDate = control.get('expirationDate');
  
  return isPerishable && isPerishable.value && expirationDate && !expirationDate.value ? { 'expirationDateRequired': true} : null;
}