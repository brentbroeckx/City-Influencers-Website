import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;
        if (!value) {
            return null;
        }

        const hasRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(value);

        const passwordValid = hasRegex;

        return !passwordValid ? {passwordInvalid: true} : null;

    }
}