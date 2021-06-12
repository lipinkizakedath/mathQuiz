import { AbstractControl } from '@angular/forms';

export class MathValidator {
  static Addtion(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const answer = form.value[target];
      const numberOne = form.value[sourceOne];
      const numberTwo = form.value[sourceTwo];

      if (numberOne + numberTwo === parseInt(answer)) {
        return null;
      }

      return { addtion: true };
    };
  }
}
