export class FormValidate {

    inputFieldValidate(input_name, input_value) {
        if (!input_value) return input_name + ' is required';

        return '';
    }

}