export class FormValidate {

    inputFieldValidate(input_name, input_value) {
        if (!input_value) return input_name + ' is required';

        return '';
    }

    validateEmail(input_name, input_value) {
        const email_reg_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validate_result = email_reg_exp.test(String(input_value).toLowerCase());

        if(!validate_result){
            return input_name + ' is not a valid email address';
        }

        return '';
    }

}