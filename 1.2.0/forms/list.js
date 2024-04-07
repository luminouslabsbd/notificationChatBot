import {FormValidate} from "./form_validate.js";
import {thankYouModal} from "../modals/modal.js";
import {subscriber_form} from "./subscriber.js";

const list_form = `
    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" id="ll_notify_list">
        <div class="ll-list-new-system">
            <div style="text-align: end;">
                <button class="ll-list-save" style="font-size: 12px; margin-bottom: 3%;" type="button" id="ll_notify_subscriber_add">+ Subscribers</button>
            </div>
            <input type="hidden" class="ll_notify_list_form_data" name="user_id" value="222"/>
            <div class="ll-list-name-main">
                <label class="ll-list-name-felid">
                    <input class="ll_notify_list_form_data" type="text" placeholder="Name" name="list_name" required/>
                    <span class="ll-list-name-placeholder">Name</span>
                </label>
                <p class="ll-list-allowed-notification">Please try entering only alphabets and number.</p>
            </div>

            <div class="ll-list-number-main">
                <label class="ll-list-number-felid">
                    <input class="ll_notify_list_form_data" type="text" placeholder="Tags" name="list_tag"/>
                    <span class="ll-list-name-placeholder">Tags (Optional)</span>
                </label>
            </div>

            <div class="ll-list-meassage-area">
                <label class="ll-list-ui-form-input-container">
                    <textarea maxlength="2000" class="ll-list-ui-form-input ll_notify_list_form_data" name="list_text id="word-count-input" rows="6" cols="30" placeholder="Description"></textarea>
                    <span class="ll-list-form-input-label">Description (Optional)</span>
                </label>
            </div>

            <div class="ll-list-button">
                <button class="ll-list-save" id="ll_notify_list_save" type="button">Save</button>
            </div>

            <div id="ll_notify_list_error"></div>
        </div>
    </form>
`;

function ll_notify_list_submit(){
    var ll_notify_submit = window.document.getElementById('ll_notify_list_save');
    var ll_notify_form = document.getElementById('ll_notify_list');

    if (typeof(ll_notify_form) != 'undefined' && ll_notify_form != null){
        ll_notify_submit.onclick = function(e){
            e.preventDefault();

            var validate_result = '';
            var input_error = [];
            var form_validate = new FormValidate();
            
            var error_show_div = document.getElementById('ll_notify_list_error');
            error_show_div.innerHTML = '';
            error_show_div.removeAttribute('style');

            var form_element = document.getElementsByClassName('ll_notify_list_form_data');

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
            var url = ll_notify_form.getAttribute('action');
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

                        thankYouModal('List Inserted Successfully!');
                        
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

function addSubscriber(){
    var ll_notify_sbscrb = window.document.getElementById('ll_notify_subscriber_add');
    var ll_notify_form = document.getElementById('ll_notify_list');
    console.log(ll_notify_form);

    if (typeof(ll_notify_form) != 'undefined' && ll_notify_form != null){
        ll_notify_sbscrb.onclick = function(){
            var modal_header = document.getElementById('ll_notify_modal_header_span');
            modal_header.innerHTML = 'Create Subscriber';

            getSubscriberForm();
            showModal();

            /* During list create form bind to modal, list create related function will call here */
            // ll_notify_list_submit();
            /* During list create form bind to modal, list create related function will call here End*/
        }
    }
}

function getSubscriberForm(){
    var modal_body = document.getElementById("ll_notify_display_modal_body");
    modal_body.innerHTML = subscriber_form;

}

export { list_form, ll_notify_list_submit, addSubscriber };