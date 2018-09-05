import { AbstractControl } from "@angular/forms";

export function isDateValidator (control: AbstractControl): {[key: string]: any} | null {
      const regexp = new RegExp('^[0-3][0-9]/[0-1][0-9]/(?:[0-9][0-9])?[0-9][0-9]$');
      return regexp.test(control.value) ? null: {'notdate': {value: control.value}};
    };
  