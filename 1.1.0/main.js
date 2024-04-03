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

    function getScriptAttributeValue(attr_name)
    {
        let element = document.getElementById('ll_notify_script');
        return element.dataset[attr_name] ?? '';
    }

})();
