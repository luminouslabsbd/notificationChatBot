import { whatsapp_form } from "./forms/whatsapp.js";
import { email_form } from "./forms/email.js";
import { styles } from "./notify_css.js";

(function(){
    
    document.addEventListener("DOMContentLoaded", function(event) {
        if(document.getElementById('notification_luminous_labs')){
            ll_notification_widgets_init();
            ll_notification_widgets_setStyles(styles);
            supplier_country_list();
        }
    });

    function ll_notification_widgets_init(){
        let mainDiv = document.getElementById('notification_luminous_labs');
    
        let notification_type = getScriptAttributeValue('notify_type');
        
        if(notification_type != ''){
            if(notification_type == 'whatsapp'){
                mainDiv.innerHTML = whatsapp_form;
            }else if(notification_type == 'email'){
                mainDiv.innerHTML = email_form;
            }
        }
    }

    const dummy = `
        .ll-notified-wrapper {
            max-width: 600px;
            margin: auto;
        }

        .ll-notified-tab-wrapper {
            text-align: center;
            display: block;
            margin: auto;
            max-width: 500px;
        }

        .ll-notified-tabs {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .ll-notified-tab-link {
            margin: 0 1%;
            list-style: none;
            padding: 10px 40px;
            color: #aaa;
            cursor: pointer;
            font-weight: 700;
            transition: all ease 0.5s;
            border-bottom: solid 3px rgba(255, 255, 255, 0);
            letter-spacing: 1px;
        }

        .ll-notified-tab-link:hover {
            color: #999;
            border-color: #999;
        }

        .ll-notified-tab-link.active {
            color: #333;
            border-color: #333;
        }

        .ll-notified-tab-link:nth-of-type(1).active {
            color: #EE6534;
            border-color: #EE6534;
        }

        .ll-notified-tab-link:nth-of-type(2).active {
            color: #EE6534;
            border-color: #EE6534;
        }

        .ll-notified-content-wrapper {
            padding: 10px 25px;
            box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
            border-radius: 10px;
            margin-top: 10px;
        }

        .ll-notified-tab-content {
            display: none;
            color: #888;
            font-weight: 300;
            font-size: 15px;
            opacity: 0;
            transform: translateY(15px);
            animation: ll-fadeIn 0.5s ease 1 forwards;
        }

        .ll-notified-tab-content.active {
            display: block;
        }


        .ll-notified-email-tabs-select label {
            font-size: 12px;
            min-width: 100px;
        }

        .ll-notified-email-tabs-select {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .ll-notified-chatbot-parent {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .ll-notified-email-tabs-select select#template {
            padding: 7px 7px 7px 7px;
            border: 1px solid #ddd;
            background-color: transparent;
            font-size: 12px;
            width: 300px;
            outline: none;
            border-radius: 6px;
            color: #565050;
        }

        span.ll-notified-chatbot-add-icon {
            height: 35px;
            border-radius: 22px;
            width: 40px;
            background: rgb(75 170 255);
            /* color: black; */
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 22px;
            font-weight: bold;
            cursor: pointer;
        }

        .ll-notified-chatbot-radio-button-parent {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-top: 30px;
        }

        .ll-notified-chatbot-radio-item label {
            font-size: 15px;
        }

        .ll-notified-chatbot-radio-item input {
            width: 15px;
            height: 15px;
            margin: 0px;
            cursor: pointer;
        }

        .ll-notified-chatbot-radio-item {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .ll-notified-chatbot-form-send {
            padding: 7px 15px;
            background-color: rgb(75 170 255);
            /* color: rgb(59, 53, 53); */
            color: rgb(255, 255, 255);
            font-size: 14px;
            border-radius: 22px;
            border: none;
            cursor: pointer;
        }

        .ll-notified-chatbot-test-inputfelid input {
            padding: 10px 10px 10px 10px;
            border: 1px solid #ddd;
            background-color: transparent;
            font-size: 15px;
            outline: none;
            border-radius: 6px;
            color: #565050;
        }

        .ll-notified-chatbot-form-text {
            padding: 0px 20px;
            background-color: rgb(75 170 255);
            /* color: rgb(59, 53, 53); */
            color: rgb(255, 255, 255);
            font-size: 15px;
            border-radius: 22px;
            border: none;
            cursor: pointer;
            height:30px;
        }

        .ll-notified-chatbot-test-inputfelid {
            display: flex;
            justify-content: end;
            gap: 7px;
            align-items: center;
        }

        .ll-notified-inner-chatbot-parent {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: #d0d0d02b;
            padding: 5px 10px;
            border-radius: 10px;
        }

        .ll-notified-chatbot-select-parent {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: #d0d0d02b;
            padding: 5px 10px;
            border-radius: 10px;
        }

        @keyframes ll-fadeIn {
            100% {
                opacity: 1;
                transform: none;
            }
        }

        /* Modal CSS START*/
        .ll_notify_modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 999; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        }
        
        /* Modal Content */
        .ll_notify_modal_content {
            position: relative;
            bottom: 70px;
            background-color: #fefefe;
            margin: auto;
            padding: 0;
            width: 30%;
            height: 57%;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: ll_notify_animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: ll_notify_animatetop;
            animation-duration: 0.4s;
        }
        
        @media screen and (max-width: 1600px) and (min-width: 900px){
            .ll_notify_modal_content {
                width: 45%;
            }
        }
        
        @media screen and (max-width: 899px) and (min-width: 400px){
            .ll_notify_modal_content {
                width: 60%;
            }
        }
        
        /* Add Animation */
        @-webkit-keyframes ll_notify_animatetop {
            from {top:-300px; opacity:0} 
            to {top:0; opacity:1}
        }
        
        @keyframes ll_notify_animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
        }
        
        .ll_notify_modal_close:hover,
        .ll_notify_modal_close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
        
        .ll_notify_modal_header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 1rem 1rem;
            border-bottom: 1px solid #dee2e6;
            background-color: #4baaff;
            color: #fff;
        }
        
        .ll_notify_modal_body {
            padding: 2px 16px;
            height: 86%;
            overflow: auto;
        }

        .ll_notify_modal_footer{
            padding: 1.5rem 1.5rem;
            background-color: #4baaff;
            color: #fff;
        }

        .ll_notify_modal_body a {
            text-decoration: none;
            color: #4baaff;
        }

        .ll_notify_modal_body a:hover {
            color: #4baaff;
        }
        /* Modal CSS END */

        /* Templace Start */
        label.ll-template-name-felid {
            position: relative;
        }
    
        label.ll-template-name-felid input {
            padding: 13px 15px;
            border-radius: 8px;
            border: 2px solid #e0a315;
            outline: 0;
            width: 100%;
            max-width: 465px;
        }
    
        span.ll-template-name-placeholder {
            position: absolute;
            top: -21px;
            left: 10px;
            color: #000;
            font-size: 0.85rem;
            padding-right: 0.33rem;
            padding-left: 0.33rem;
            background: #fff;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: sans-serif;
            text-transform: capitalize;
        }
    
    
        .ll-template-ui-form-input-container {
            position: relative;
            font-size: 1rem;
            display: block;
            margin-top: 50px;
        }
    
        .ll-template-ui-form-input {
            padding: 13px 15px;
            border-radius: 8px;
            border: 2px solid #e0a315;
            outline: 0;
            width: 100%;
            max-width: 465px;
        }
    
        .ll-template-form-input-label {
            position: absolute;
            top: -7px;
            left: 10px;
            color: #000;
            font-size: 0.85rem;
            padding-right: 0.33rem;
            padding-left: 0.33rem;
            background: #fff;
            transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
            font-family: sans-serif;
            text-transform: capitalize;
        }
    
        .ll-template-new-system {
            padding: 40px 20px;
            /*box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/
            border-radius: 10px;
            width: 100%;
            max-width: 500px;
            margin: auto;
            padding-top: 50px;
        }
    
        button.ll-template-page-close {
            color: #585656;
            padding: 10px 20px;
            background-color: rgb(218, 214, 221);
            border: none;
            border-radius: 6px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
        }
    
        button.ll-template-save {
            color: white;
            padding: 10px 20px;
            background-color: #0086e6;
            border: none;
            border-radius: 6px;
            font-size: 15px;
            font-weight: 500;
            cursor: pointer;
        }
    
        .ll-template-button {
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 8px;
        }
    
        p.ll-template-allowed-notification {
            font-size: 12px;
            margin: 0;
            padding-top: 6px;
            font-family: sans-serif;
            color: rgb(85 85 99);
        }
    
        .ll-template-select-box {
            width: 100%;
            max-width: 150px;
            padding: 12px;
            border: 1px solid #ddd;
            background-color: transparent;
            border-radius: 6px;
            outline: none;
            margin-top: 20px;
            margin-bottom: 20px;
            cursor: pointer;
        }
    
        .ll-template-select-box option {
            background-color: #f8f9fa;
            color: #212529;
        }
        /* Templace Start END */
    `;
    
    function ll_notification_widgets_setStyles(addStyle) {
        const styleElement = document.createElement('style');
        
        styleElement.innerHTML = addStyle;
    
        document.head.appendChild(styleElement);
    }

    function supplier_country_list(){

        // Creating Our XMLHttpRequest object 
        var xhr = new XMLHttpRequest();
    
        // Making our connection  
        let url = '';
        xhr.open("GET", url, true);
    
        // function execute after request is successful 
        // xhr.onreadystatechange = function () {
        //     if (this.readyState == 4) {

        //         if(this.status == 200){
        //             let country_list = JSON.parse(this.responseText).data;
    
        //             if(country_list != ''){
        //                 document.getElementById('billing_country_id').innerHTML = country_list;
        //             }
        //         }else if(this.status == 400){
        //             let message = JSON.parse(this.responseText).data;
        //             console.log(message);
        //         }

        //     }
        // }
        
        // Sending our request 
        // xhr.send();

    }

    function supplier_registration_form_submit(){

        // let supplier_reg_form = document.getElementById('supplier_registration_form');
        // let supplier_reg_submit_btn = document.getElementById('supplier_registration_submit_btn');
        
        // supplier_reg_submit_btn.onclick = function(e){
        //     e.preventDefault();

        //     let error_show_div = document.getElementById('supplier_form_validation');
        //     error_show_div.innerHTML = '';
        //     error_show_div.removeAttribute('style');

        //     var form_element = document.getElementsByClassName('supplier_reg_form_data');

        //     var formData = new FormData();

        //     for(var i = 0; i < form_element.length; i++)
        //     {
        //         formData.append(form_element[i].name, form_element[i].value);
        //     }

        //     e.target.disabled = true;

        //     // Creating Our XMLHttpRequest object
        //     var xhr = new XMLHttpRequest();
        
        //     // Making our connection
        //     var url = supplier_reg_form.getAttribute('action');
        //     xhr.open("POST", url, true);

        //     xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        //     // Sending our request 
        //     xhr.send(formData);

        //     // function execute after request is successful 
        //     xhr.onreadystatechange = function () {
        //         if (this.readyState == 4) {

        //             if(this.status == 200){

        //                 e.target.disabled = false;

        //                 let redirect_url = JSON.parse(this.responseText).redirect_url;

        //                 window.open(redirect_url, "_blank");
                        
        //             }else if(this.status == 422){

        //                 e.target.disabled = false;

        //                 let error_show = '';

        //                 let error_list = JSON.parse(this.responseText).error_list;

        //                 if(error_list.length > 0){
        //                     error_list.forEach(function (value, index){
        //                         error_show += value + "<br>";
        //                     });
        //                 }

        //                 if(error_show != ''){
        //                     let error_show_div = document.getElementById('supplier_form_validation');
        //                     error_show_div.innerHTML = error_show;

        //                     error_show_div.style.backgroundColor = 'red';
        //                     error_show_div.style.color = 'white';
        //                     error_show_div.style.padding = '10px';
        //                     error_show_div.style.fontSize = '14px';
        //                     error_show_div.style.fontFamily = 'Helvetica Neue",Helvetica,Arial,sans-serif !important';
        //                 }
        //             }

        //         }
        //     }
        // }
    }

    function getScriptAttributeValue(attr_name)
    {
        let element = document.getElementById('ll_notify_script');
        return element.dataset[attr_name] ?? '';
    }

})();
