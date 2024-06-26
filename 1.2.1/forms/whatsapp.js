import {createModal, showModal, closeModal} from "../modals/modal.js";
import {whatsapp_template, setTemplateTextField,template_submit} from "./whatsapp_template.js";
import {list_form, ll_notify_list_submit, addSubscriber} from "./list.js";

const whatsapp_form = `
    <div class="ll-notified-wrapper">
        <div class="ll-notified-content-wrapper">
            <form action="#">
                <div class="ll-notified-chatbot-parent">
                    <div class="ll-notified-email-tabs-select">
                        <label for="template">Template</label>
                        <div class="ll-notified-inner-chatbot-parent">
                            <select id="template" name="template">
                                <option value="boots">Boots</option>
                                <option value="saab">Saab</option>
                                <option value="yuva">Yuva</option>
                            </select>
                            <span id="whatsapp_template_add" class="ll-notified-chatbot-add-icon">+</span>
                        </div>
                    </div>
                    <div class="ll-notified-email-tabs-select">
                        <label for="atendees">Atendees</label>
                        <div class="ll-notified-chatbot-select-parent">
                            <select id="template" name="template">
                                <option value="boots">Boots</option>
                                <option value="saab">Saab</option>
                                <option value="yuva">Yuva</option>
                            </select>
                        </div>
                    </div>
                    <div class="ll-notified-email-tabs-select">
                        <label for="nonatendees">Non Atendees</label>
                        <div class="ll-notified-chatbot-select-parent">
                            <select id="template" name="template">
                                <option value="boots">Boots</option>
                                <option value="saab">Saab</option>
                                <option value="yuva">Yuva</option>
                            </select>
                        </div>
                    </div>
                    <div class="ll-notified-email-tabs-select">
                        <label for="registered">Registered</label>
                        <div class="ll-notified-chatbot-select-parent">
                            <select id="template" name="template">
                                <option value="boots">Boots</option>
                                <option value="saab">Saab</option>
                                <option value="yuva">Yuva</option>
                            </select>
                        </div>
                    </div>
                    <div class="ll-notified-email-tabs-select">
                        <label for="list">List</label>
                        <div class="ll-notified-inner-chatbot-parent">
                            <select id="template" name="template">
                                <option value="boots">Boots</option>
                                <option value="saab">Saab</option>
                                <option value="yuva">Yuva</option>
                            </select>
                            <span id="ll_notify_whatsapp_list" class="ll-notified-chatbot-add-icon">+</span>
                        </div>
                    </div>
                </div>
                <div class="ll-notified-chatbot-radio-button-parent">
                </div>
                <div class="ll-notified-chatbot-test-inputfelid">
                    <button class="ll-notified-chatbot-form-text">Test</button>
                    <input type="email" placeholder="123456" required>
                </div>
                <button class="ll-notified-chatbot-form-send">Send</button>
            </form>
        </div>
    </div>
`;

window.onload = (function() {
    createModal();
    createTemplate();
    closeModal();
    createList();
});

document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
    }
}

function createTemplate(){
    var create_button = document.getElementById('whatsapp_template_add');
    
    create_button.onclick = function(){
        var modal_header = document.getElementById('ll_notify_modal_header_span');
        modal_header.innerHTML = 'Create Template';

        getTemplate();
        showModal();

        /* During template form bind to modal, template related function will call here */
        setTemplateTextField();
        template_submit();
        /* During template form bind to modal, template related function will call here End*/
    }
}

function getTemplate(){
    var modal_body = document.getElementById("ll_notify_display_modal_body");
    modal_body.innerHTML = whatsapp_template;

}

function createList(){
    var list_button = document.getElementById('ll_notify_whatsapp_list');
    
    list_button.onclick = function(){
        var modal_header = document.getElementById('ll_notify_modal_header_span');
        modal_header.innerHTML = 'Create List';

        getListForm();
        showModal();

        /* During list create form bind to modal, list create related function will call here */
        ll_notify_list_submit();
        addSubscriber();
        /* During list create form bind to modal, list create related function will call here End*/
    }
}

function getListForm(){
    var modal_body = document.getElementById("ll_notify_display_modal_body");
    modal_body.innerHTML = list_form;

}

export {whatsapp_form};