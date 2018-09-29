import { ValidatorFn, AbstractControl } from "@angular/forms";

export function unitRequiredValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    
    return typeof control.value !== 'string' ? {'unitRequired': true} : null;
  };
}

