import {FormValidate} from "./form_validate.js";
import {thankYouModal} from "../modals/modal.js";

const subscriber_form = `
    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" id="ll_notify_sbscrb">
        <div class="ll-subscriber-new-system">
            <input type="hidden" class="ll_notify_sbscrb_form_data" name="user_id" value="222"/>
            <div class="ll-subscriber-name-main">
                <label class="ll-subscriber-name-felid">
                    <input type="email" class="ll_notify_sbscrb_form_data" name="subscribe_email" placeholder="E-mail" required/>
                    <span class="ll-subscriber-name-placeholder">E-mail</span>
                </label>
                <p class="ll-subscriber-allowed-notification">Only alphabers, number and space is allowed</p>
            </div>

            <div class="ll-subscriber-name-feild-parent">
                <div class="ll-subscriber-name-main">
                    <label class="ll-subscriber-name-felid">
                        <input type="text" class="ll_notify_sbscrb_form_data" placeholder="Name" name="subscribe_name"/>
                        <span class="ll-subscriber-name-placeholder">Name</span>
                    </label>
                    <p class="ll-subscriber-allowed-notification">Only alphabers, number and space is allowed</p>
                </div>

                <div class="ll-subscriber-status-main">
                    <span class="ll-subscriber-name-placeholder">Status</span>
                    <select class="ll-subscriber-status-select-box ll_notify_sbscrb_form_data" name="subscribe_status">
                        <option value="">Select Variable</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option3">Option 4</option>
                        <option value="option4">Option 5</option>
                    </select>
                    <p class="ll-subscriber-status-notification">Blocaklisted subscribers will never receive any e-mails.
                    </p>
                </div>
            </div>

            <div class="ll-subscriber-number-parent">
                <select class="ll-subscriber-number-select-box ll_notify_sbscrb_form_data" name="subscribe_ecuador" disabled>
                    <option value="">Ecuador + 5 93</option>
                </select>
                <div class="ll-subscriber-number-main">
                    <label class="ll-subscriber-number-felid">
                        <input type="number" class="ll_notify_sbscrb_form_data" placeholder="Phone" name="subscribe_phone"/>
                        <span class="ll-subscriber-name-placeholder">Phone</span>
                    </label>
                </div>
            </div>

            <div class="ll-subscriber-list-main">
                <span class="ll-subscriber-list-placeholder">List (0)</span>
                <select class="ll-subscriber-status-select-box ll_notify_sbscrb_form_data" name="subscribe_list">
                    <option value="">Select Variable</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option3">Option 4</option>
                    <option value="option4">Option 5</option>
                </select>
                <p class="ll-subscriber-allowed-notification">Lists form which subscribers have unsubscribers themselves
                    cannot be removed</p>
            </div>

            <div class="ll-subscriber-meassage-area">
                <label class="ll-subscriber-ui-form-input-container">
                    <textarea class="ll-subscriber-ui-form-input ll_notify_sbscrb_form_data" id="word-count-input" rows="6" cols="30"
                        placeholder="{}" name="subscribe_text"></textarea>
                    <span class="ll-subscriber-form-input-label">Attributes</span>
                </label>
                <p class="ll-subscriber-allowed-notification">please fill out this field.</p>
            </div>

            <div class="ll-subscriber-button">
                <button class="ll-subscriber-save" type="button" id="ll_notify_sbscrb_save">Save</button>
            </div>

            <div id="ll_notify_sbscrb_error"></div>
        </div>
    </form>
`;

function ll_notify_subscriber_submit(){
    var ll_notify_sbscrb_submit = window.document.getElementById('ll_notify_sbscrb_save');
    var ll_notify_sbscrb_form = document.getElementById('ll_notify_sbscrb');

    if (typeof(ll_notify_sbscrb_form) != 'undefined' && ll_notify_sbscrb_form != null){
        ll_notify_sbscrb_submit.onclick = function(e){
            e.preventDefault();

            var validate_result = '';
            var input_error = [];
            var form_validate = new FormValidate();
            
            var error_show_div = document.getElementById('ll_notify_sbscrb_error');
            error_show_div.innerHTML = '';
            error_show_div.removeAttribute('style');

            var form_element = document.getElementsByClassName('ll_notify_sbscrb_form_data');

            var formData = new FormData();

            var input_error_index = 0; //If any of element is not empty then for loop index will not show correctly, due to here using this variable

            for(var i = 0; i < form_element.length; i++)
            {
                if(form_element[i].hasAttribute('required')){ // input field if required
                    validate_result = form_validate.inputFieldValidate(form_element[i].name, form_element[i].value); //Form validation result
                    
                    if(validate_result != ''){
                        input_error[input_error_index] = validate_result;
                        input_error_index++;
                    }else{
                        if(form_element[i].getAttribute('type') == 'email'){
                            validate_result = form_validate.validateEmail(form_element[i].name, form_element[i].value); //Email validation
                        }

                        if(validate_result != ''){
                            input_error[input_error_index] = validate_result;
                            input_error_index++;
                        }
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
            var url = ll_notify_sbscrb_form.getAttribute('action');
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

                        thankYouModal('Subscriber Inserted Successfully!');
                        
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
}

export { subscriber_form, ll_notify_subscriber_submit };