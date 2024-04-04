import {FormValidate} from "./form_validate.js";

const whatsapp_template = `
    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" id="ll_whatsapp_template">
        <div class="ll-template-new-system">
            <input type="hidden" class="ll_template_form_data" name="user_id" value="222"/>
            <div class="ll-template-name-main">
                <label class="ll-template-name-felid">
                    <input class="ll_template_form_data" type="text" autocomplete="off" placeholder="Name" name="template_name" required/>
                    <span class="ll-template-name-placeholder">Name</span>
                </label>
                <p class="ll-template-allowed-notification">Only alphabers, number and space is allowed</p>
            </div>

            <div class="ll-template-meassage-area">
                <label class="ll-template-ui-form-input-container">
                    <textarea class="ll-template-ui-form-input ll_template_form_data" name="template_text" id="ll_template_text" rows="6" cols="30" placeholder="SMS Message" required></textarea>
                    <span class="ll-template-form-input-label">Message</span>
                </label>
                <p class="ll-template-allowed-notification">please fill out this field.</p>
            </div>

            <select class="ll-template-select-box" id="ll_template_dropdown">
                <option value="">Select Variable</option>
                <option value="option1">Option 2</option>
                <option value="option2">Option 3</option>
                <option value="option3">Option 4</option>
                <option value="option4">Option 5</option>
            </select>

            <div class="ll-template-button">
                <button class="ll-template-save" type="submit" id="ll_template_save">Save</button>
            </div>

            <div id="ll_whatsapp_template_error"></div>
        </div>
    </form>
`;

function setTemplateTextField(){
    var template_dropdown = window.document.getElementById('ll_template_dropdown');
    var template_text = document.getElementById('ll_template_text');

    template_dropdown.onchange = function(){
        if(template_dropdown.value != ''){
            template_text.value += (` ` + template_dropdown.value);
        }
    }
}

function template_submit(){
    var template_submit = window.document.getElementById('ll_template_save');
    var template_form = document.getElementById('ll_whatsapp_template');

    template_submit.onclick = function(e){
        e.preventDefault();

        var validate_result = '';
        var input_error = [];
        var form_validate = new FormValidate();
        
        var error_show_div = document.getElementById('ll_whatsapp_template_error');
        error_show_div.innerHTML = '';
        error_show_div.removeAttribute('style');

        var form_element = document.getElementsByClassName('ll_template_form_data');

        var formData = new FormData();

        var input_error_index = 0; //If any of element is not empty then for loop index will not show correctly, due to here using this variable

        for(var i = 0; i < form_element.length; i++)
        {
            if(form_element[i].hasAttribute('required')){ // input field if required
                validate_result = form_validate.inputFieldValidate(form_element[i].name, form_element[i].value); //Form validation result
                if(validate_result != ''){
                    input_error[input_error_index] = validate_result;
                    input_error_index++;
                }
            }

            formData.append(form_element[i].name, form_element[i].value);
        }

        if(input_error.length > 0){
            error_show_div.innerHTML = input_error;

            error_show_div.style.backgroundColor = 'red';
            error_show_div.style.color = 'white';
            error_show_div.style.marginTop = '10px';
            error_show_div.style.padding = '10px';
            error_show_div.style.fontSize = '14px';
            error_show_div.style.fontFamily = 'Helvetica Neue",Helvetica,Arial,sans-serif !important';

            return;
        }

        e.target.disabled = true;
        e.target.style["cursor"] = "no-drop";

        // Creating Our XMLHttpRequest object
        var xhr = new XMLHttpRequest();
    
        // Making our connection
        var url = template_form.getAttribute('action');
        xhr.open("POST", url, true);

        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        // Sending our request 
        xhr.send(formData);

        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {

                if(this.status == 200 || this.status == 201){

                    e.target.disabled = false;
                    e.target.removeAttribute('style');
                    
                }else if(this.status == 422){

                    e.target.disabled = false;
                    e.target.removeAttribute('style');

                    let error_show = '';

                    let error_list = JSON.parse(this.responseText).error_list;

                    if(error_list.length > 0){
                        error_list.forEach(function (value, index){
                            error_show += value + "<br>";
                        });
                    }

                    if(error_show != ''){
                        error_show_div.innerHTML = error_show;

                        error_show_div.style.backgroundColor = 'red';
                        error_show_div.style.color = 'white';
                        error_show_div.style.padding = '10px';
                        error_show_div.style.fontSize = '14px';
                        error_show_div.style.fontFamily = 'Helvetica Neue",Helvetica,Arial,sans-serif !important';
                    }
                }else if(this.status == 404){
                    e.target.disabled = false;
                    e.target.removeAttribute('style');
                }

            }
        }
    }
}

export { whatsapp_template, setTemplateTextField, template_submit };