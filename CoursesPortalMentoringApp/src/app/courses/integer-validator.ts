import { AbstractControl } from "@angular/forms";

export function isIntegerValidator (control: AbstractControl): {[key: string]: any} | null {
      return Number.isInteger(+control.value) ? null: {'notinteger': {value: control.value}};
    };
  