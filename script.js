
(function(){

    document.addEventListener("DOMContentLoaded", function(event) {
        if(document.getElementById('notification_luminous_labs')){
            supplier_registration_widgets_init();
            supplier_registration_widgets_setStyles(styles);
            supplier_country_list();
            set_url_param_to_form_field();
            supplier_registration_checked_checkbox();
            supplier_registration_form_submit();

            supplier_registration_widgets_agb_and_policy_modal();
            supplier_registration_widgets_agb_and_policy_display();
            supplier_registration_widgets_agb_closeModal();
        }
    });

    function supplier_registration_widgets_init(){
        let mainDiv = document.getElementById('notification_luminous_labs');
    
        $supplier_embed_form = `
                            <div id="supplier-widgets-feedback-form">
                                <h2 class="header">Jetzt registrieren</h2>
                                <div>
                                    <form autocomplete="off" id="supplier_registration_form" action="{{$action_url}}" method="post" target="_blank">

                                        <input type="hidden" class="supplier_reg_form_data" name="_token" value="{{csrf_token()}}">
                                        <input type="hidden" id="user_referred_by_id" class="supplier_reg_form_data" name="user_referred_by" value="">

                                        <div class="supplier-widgets-form-group">
                                            <label class="supplier-widgets-input-label" for="name">Name <span class="supplier-widgets-text-danger">*</span></label>
                                            <div class="supplier-widgets-add-icon">
                                                <input type="text" id="name" class="supplier_reg_form_data" name="name" placeholder="Benutzername" required>
                                                <img class="supplier-widgets-inputField-icon" src="https://i.postimg.cc/3xdLt1ks/New-Project-2.png" alt="">
                                            </div>
                                        </div>
                                        <div class="supplier-widgets-form-group">
                                            <label class="supplier-widgets-input-label" for="email">Email <span class="supplier-widgets-text-danger">*</span></label>
                                            <div class="supplier-widgets-add-icon">
                                                <input type="email" id="email" class="supplier_reg_form_data" name="email" placeholder="Email" required>
                                                <img class="supplier-widgets-inputField-icon" src="https://i.postimg.cc/v8KbPqTy/New-Project-1.png" alt="">
                                            </div>
                                        </div>
                                        <div class="supplier-widgets-form-group">
                                            <label class="supplier-widgets-input-label" for="password">Password <span class="supplier-widgets-text-danger">*</span></label>
                                            <div class="supplier-widgets-add-icon">
                                                <input type="password" id="password" class="supplier_reg_form_data" name="password" placeholder="Passwort" required>
                                                <img class="supplier-widgets-inputField-icon" src="https://i.postimg.cc/pd6D9J0Z/New-Project.png" alt="">
                                            </div>
                                        </div>
                                        <div class="supplier-widgets-twoInputFiled">
                                                <div class="supplier-widgets-form-group  supplier-widgets-pr-5">
                                                    <label class="supplier-widgets-input-label" for="billing_company_name">Company Name</label>
                                                    <input type="text" id="billing_company_name" class="supplier_reg_form_data" name="company_name" placeholder="Expertiserock Ltd.">
                                                </div>
                                                <div class="supplier-widgets-form-group supplier-widgets-select supplier-widgets-pl-5" >
                                                    <label class="supplier-widgets-input-label" for="billing_country_id">Country/Region <span class="supplier-widgets-text-danger">*</span></label>
                                                    <select id="billing_country_id" class="supplier_reg_form_data" name="country_id" required>
                                                        <option value="">Choose Country</option>
                                                    </select>
                                                </div>
                                        </div>
                                        <div class="supplier-widgets-twoInputFiled">
                                            <div class="supplier-widgets-form-group supplier-widgets-pr-5">
                                                <label class="supplier-widgets-input-label" for="billing_city">City <span class="supplier-widgets-text-danger">*</span></label>
                                                <input type="text" id="billing_city" class="supplier_reg_form_data" name="city" placeholder="Type your City" required value="">
                                            </div>
                                            <div class="supplier-widgets-form-group supplier-widgets-pl-5">
                                                <label class="supplier-widgets-input-label" for="billing_zip">Zip <span class="supplier-widgets-text-danger">*</span></label>
                                                <input type="text" id="billing_zip" class="supplier_reg_form_data" name="zip" placeholder="32345" required>
                                            </div>
                                        </div>
                                        <div class="supplier-widgets-form-group">
                                            <label class="supplier-widgets-input-label" for="billing_address" class="supplier-widgets-w-100">Address <span class="supplier-widgets-text-danger">*</span></label>
                                            <textarea class="supplier-widgets-w-100 supplier_reg_form_data" name="address" id="billing_address" rows="3" required></textarea>
                                        </div>
                                        <div class="supplier-widgets-twoInputFiled">
                                            <div class="supplier-widgets-form-group supplier-widgets-pr-5">
                                                <label class="supplier-widgets-input-label" for="billing_phone">Phone Number</label>
                                                <input type="text" id="billing_phone" class="supplier_reg_form_data" name="phone" placeholder="Phone Number">
                                            </div>
                                            <div class="supplier-widgets-form-group supplier-widgets-pl-5">
                                                <label class="supplier-widgets-input-label" for="billing_vat_id">Vat ID</label>
                                                <input type="text" id="billing_vat_id" class="supplier_reg_form_data" name="vat_id" placeholder="ESB384857484">
                                            </div>
                                        </div>
                                        <button type="submit" id="supplier_registration_submit_btn" disabled>Anmelden</button>

                                        <div style="overflow: hidden; clear: both;">
                                            <div class="supplier-widgets-form-group supplier-widgets-customCheck">
                                                
                                                <label><input type="checkbox" id="supplier_registration_agree_checkbox1" value="true"> ich akzeptiere die <span class="supplier-widgets-text-drm" id="supplier_widgets_agb">AGB</span></label>
                                            </div>
                                            <div class="supplier-widgets-form-group supplier-widgets-customCheck">
                                                
                                                <label><input type="checkbox" id="supplier_registration_agree_checkbox2" value="true"> ich akzeptiere die <span class="supplier-widgets-text-drm" id="supplier_widgets_policy" >Datenschutzerklärung</span></label>
                                            </div>
                                            <div class="supplier-widgets-form-group supplier-widgets-customCheck">
                                                
                                                <label><input type="checkbox" id="supplier_registration_agree_checkbox3" value="true"> Ich willige ein, dass meine Daten wie Namen, Vorname, Adresse, Telefonnummer, Email- und IP-Adresse sowie Kontodaten und Kredikarteninformationen in Drittländer transferiert werden. Dort können unter Umständen Polizeibehörden und ggf. Geheimdienste auf die Daten zugreifen.</label>
                                            </div>
                                        </div>
                                        <br>
                                        <div id="supplier_form_validation">

                                        </div>
                                    </form>
                                </div>
                            </div>
                        `;

        mainDiv.innerHTML = $supplier_embed_form;

        supplier_registration_widgets_loadDrmValidationUi();
    }
    
    function supplier_registration_widgets_agb_and_policy_modal() {
    
        // Element Start >>>>
        let newDiv = document.createElement('div');
    
        newDiv.setAttribute('id', 'supplier_widgets_agb_n_policy_display_modal');
        newDiv.setAttribute('class', 'supplier_widgets_agb_modal');
        // Element End <<<<
    
        // Element Start >>>>
        let modalContent = document.createElement('div');
        modalContent.setAttribute('class', 'supplier_widgets_agb_modal_content');
        // Element End <<<<
        newDiv.appendChild(modalContent);
    
        // Element Start >>>>
        let modalHeader = document.createElement('div');
        modalHeader.setAttribute('class', 'supplier_widgets_agb_modal_header');
        // Element End <<<<
        modalContent.appendChild(modalHeader);
    
        // Element Start >>>>
        let modalHeaderSpan = document.createElement('span');
        modalHeaderSpan.setAttribute('id', 'supplier_widgets_agb_n_policy_header');
        // Element End <<<<
        modalHeader.appendChild(modalHeaderSpan);
    
        // Element Start >>>>
        let modalHeaderClose = document.createElement('span');
        modalHeaderClose.setAttribute('class', 'supplier_widgets_agb_close');
        modalHeaderClose.innerHTML = '&times;';
        // Element End <<<<
        modalHeader.appendChild(modalHeaderClose);
    
        // Element Start >>>>
        let modalBody = document.createElement('div');
        modalBody.setAttribute('class', 'supplier_widgets_agb_modal_body');
        modalBody.setAttribute('id', 'supplier_widgets_agb_n_policy_display_modal_body');
        // Element End <<<<
        modalContent.appendChild(modalBody);

        // Element Start >>>>
        let modalFooter = document.createElement('div');
        modalFooter.setAttribute('class', 'supplier_widgets_agb_modal_footer');
        modalFooter.innerHTML = '';
        // Element End <<<<
        modalContent.appendChild(modalFooter);
    
        document.body.appendChild(newDiv);
    }

    const styles = `
        #supplier-widgets-feedback-form {
            max-width: 337px;
            margin: 0 auto;
            padding: 10px 25px 10px 25px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            width: 100%;
        }

        #supplier-widgets-feedback-form * {
            box-sizing: border-box;
        }

        #supplier-widgets-feedback-form h2{
            text-align: center;
            margin-bottom: 10px;
            margin-top: 0;
            color: {{$theme}};
            font-weight: bold;
            font-size: 14px;
            line-height: 1.42857143;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
        }

        #supplier-widgets-feedback-form input, #supplier-widgets-feedback-form textarea{
            margin-bottom: 15px;
        }

        #supplier-widgets-feedback-form input[type=text], #supplier-widgets-feedback-form input[type=email], #supplier-widgets-feedback-form input[type=password], #supplier-widgets-feedback-form select{
            display: block;
            height: 32px;
            padding: 5px 42.5px 6px 12px;
            width: 100%;
            border: none;
            background-color: #fff;
            color: #555;
            border: 1px solid {{$theme}} !important;
            border-radius: 4px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            font-size: 14px;
        }

        #supplier-widgets-feedback-form textarea{
            display: block;
            padding: 5px 6px 6px 12px;
            width: 100%;
            border: none;
            background-color: #fff;
            color: #555;
            border: 1px solid {{$theme}} !important;
            border-radius: 4px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            font-size: 14px;
        }

        #supplier-widgets-feedback-form input[type=text]:focus, #supplier-widgets-feedback-form input[type=email]:focus, #supplier-widgets-feedback-form input[type=password]:focus, #supplier-widgets-feedback-form textarea:focus, #supplier-widgets-feedback-form select:focus{
            box-shadow: 0 0 5px {{$theme}} !important;
            outline: 0;
        }

        #supplier-widgets-feedback-form label.supplier-widgets-input-label {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            font-size: 14px !important;
            line-height: 1.42857143 !important;
            color: #333 !important;
            font-weight: 600 !important;
            margin-bottom: 6px !important;
            display: block !important;
            text-align: left;
        }

        #supplier-widgets-feedback-form input[type=checkbox]{
            margin-bottom: 0;
        }

        #supplier-widgets-feedback-form .supplier-widgets-customCheck {
            display: flex;
        }

        #supplier-widgets-feedback-form input:not(:checked) + #feedback-phone {
            height: 0;
            padding-top: 0;
            padding-bottom: 0;
        }

        #supplier-widgets-feedback-form #feedback-phone {
            transition: .3s;
        }

        #supplier-widgets-feedback-form button[type=submit] {
            display: block;
            width: 100%;
            height: 34px;
            border-radius: 4px;
            border: none;
            color: #eee;
            font-weight: 700;
            box-shadow: 1px 4px 10px 1px #aaa;
            background: {{$theme}};
            margin-bottom: 20px;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            font-size: 14px;
            line-height: 32px;
        }

        #supplier-widgets-feedback-form button[type=submit]:hover {
            background-color: {{$theme_lighten}};
        }
        
        .supplier-widgets-customCheck>label{
            font-size: 14px !important;
            line-height: 1.42857143 !important;
            color: #333 !important;
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif !important;
            max-width: max-content !IMPORTANT;
            display: inline-block !important;
            text-align: left;
        }

        .supplier-widgets-customCheck>input{
            margin-bottom: 0 !important;
        }

        .supplier-widgets-text-drm{
            color: {{$theme}}!important;
            cursor:pointer;
            text-decoration: none;
        }

        #supplier-widgets-feedback-form .supplier-widgets-form-group{
            position: relative;
            text-align: left;
            flex-direction: row-reverse;
            align-items: flex-start;
            justify-content: flex-end; */
        }

        .supplier-widgets-add-icon img.supplier-widgets-inputField-icon {
            position: absolute;
            top: 2px;
            right: 2px;
            height: 28px;
            width: 28px;
        }

        #supplier-widgets-feedback-form button[disabled] {
            cursor: not-allowed;
            filter: alpha(opacity=65);
            -webkit-box-shadow: none;
            box-shadow: none;
            opacity: .65;
        }
        
        .supplier-widgets-add-icon{
            position: relative;
        }

        .w-50{
            position: relative;
            width: 50%;
            float: left;
        }

        .supplier-widgets-w-100{
            width: 100%;
            display: block;
        }

        .supplier-widgets-pl-5{
            padding-left: 5px;
        }

        .supplier-widgets-pr-5{
            padding-right: 5px;
        }

        .supplier-widgets-twoInputFiled {display: flex;}

        .supplier-widgets-twoInputFiled > div {
            width: 50%;
        }
        
        .supplier-widgets-twoInputFiled input[type="text"], .supplier-widgets-twoInputFiled supplier-widgets-select{
            padding-right: 6px !important;
        }

        .supplier-widgets-text-danger{
            color: #a94442;
        }

        .supplier_widgets_agb_modal {
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
        .supplier_widgets_agb_modal_content {
            position: relative;
            bottom: 70px;
            background-color: #fefefe;
            margin: auto;
            padding: 0;
            width: 30%;
            height: 75%;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            -webkit-animation-name: mp_iframe_animatetop;
            -webkit-animation-duration: 0.4s;
            animation-name: mp_iframe_animatetop;
            animation-duration: 0.4s;
        }
        
        @media screen and (max-width: 1600px) and (min-width: 900px){
            .supplier_widgets_agb_modal_content {
                width: 45%;
            }
        }
        
        @media screen and (max-width: 899px) and (min-width: 400px){
            .supplier_widgets_agb_modal_content {
                width: 60%;
            }
        }
        
        /* Add Animation */
        @-webkit-keyframes mp_iframe_animatetop {
            from {top:-300px; opacity:0} 
            to {top:0; opacity:1}
        }
        
        @keyframes mp_iframe_animatetop {
            from {top:-300px; opacity:0}
            to {top:0; opacity:1}
        }
        
        .supplier_widgets_agb_close:hover,
        .supplier_widgets_agb_close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
        
        .supplier_widgets_agb_modal_header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            padding: 1rem 1rem;
            border-bottom: 1px solid #dee2e6;
            background-color: {{$theme}};
            color: #fff;
        }
        
        .supplier_widgets_agb_modal_body {
            padding: 2px 16px;
            height: 86%;
            overflow: auto;
        }

        .supplier_widgets_agb_modal_footer{
            padding: 1.5rem 1.5rem;
            background-color: {{$theme}};
            color: #fff;
        }

        .supplier_widgets_agb_modal_body a {
            text-decoration: none;
            color: {{$theme}};
        }

        .supplier_widgets_agb_modal_body a:hover {
            color: {{$theme_lighten}};
        }
        
    `;
    
    function supplier_registration_widgets_setStyles(addStyle) {
        const styleElement = document.createElement('style');
        
        styleElement.innerHTML = addStyle;
    
        document.head.appendChild(styleElement);
    }

    function supplier_country_list(){

        // Creating Our XMLHttpRequest object 
        var xhr = new XMLHttpRequest();
    
        // Making our connection  
        let url = '{{url("api/supplier-country-list")}}';
        xhr.open("GET", url, true);
    
        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {

                if(this.status == 200){
                    let country_list = JSON.parse(this.responseText).data;
    
                    if(country_list != ''){
                        document.getElementById('billing_country_id').innerHTML = country_list;
                    }
                }else if(this.status == 400){
                    let message = JSON.parse(this.responseText).data;
                    console.log(message);
                }

            }
        }
        
        // Sending our request 
        xhr.send();

    }

    function supplier_registration_widgets_agb_and_policy_display(){
        let agb_and_policy_modal = document.getElementById("supplier_widgets_agb_n_policy_display_modal");
        let agb_and_policy_modal_header = document.getElementById("supplier_widgets_agb_n_policy_header");

        let agb_button = document.getElementById("supplier_widgets_agb");
        let policyButton = document.getElementById("supplier_widgets_policy");

        agb_button.onclick = function(e){
            e.preventDefault();
            e.stopPropagation();
            agb_and_policy_modal_header.innerHTML = 'AGB';

            let url = '{{url("api/supplier-registrtion-terms-condition")}}';
            let agb_modal_body_id = 'supplier_widgets_agb_n_policy_display_modal_body';

            supplier_registration_widgets_term_condition_and_policy_fetchAndShow(url, agb_modal_body_id, agb_and_policy_modal);
        };

        policyButton.onclick = function(e){
            e.preventDefault();
            e.stopPropagation();
            agb_and_policy_modal_header.innerHTML = 'Datenschutzerklärung';

            let url = '{{url("api/customer-registrtion-policy")}}';
            let agb_modal_body_id = 'supplier_widgets_agb_n_policy_display_modal_body';

            supplier_registration_widgets_term_condition_and_policy_fetchAndShow(url, agb_modal_body_id, agb_and_policy_modal);
        };
        
    }

    function supplier_registration_widgets_term_condition_and_policy_fetchAndShow(url, targetModalBodyId, modalId) {

        // Creating Our XMLHttpRequest object 
        var xhr = new XMLHttpRequest();
    
        // Making our connection  
        xhr.open("GET", url, true);
    
        // function execute after request is successful 
        xhr.onreadystatechange = function () {
            if (this.readyState == 4) {

                if(this.status == 200){
                    //console.log(this.responseText);
                    let term_n_conditon = JSON.parse(this.responseText).terms_condition_and_policy;
    
                    if(term_n_conditon != ''){
                        document.getElementById(targetModalBodyId).innerHTML = term_n_conditon;
                        modalId.style.display = "block";
                    }else{
                        document.getElementById(targetModalBodyId).innerHTML = '<h4 style="text-align:center;">'+ JSON.parse(this.responseText).message +'</h4>';
                        modalId.style.display = "block";
                    }
                }else if(this.status == 400){
                    //console.log(this.responseText);

                    document.getElementById(targetModalBodyId).innerHTML = '<h4 style="text-align:center;">'+ JSON.parse(this.responseText).message +'</h4>';
                    modalId.style.display = "block";
                }

            }
        }
        
        // Sending our request 
        xhr.send();
    }

    function supplier_registration_url_param_get(url_param){
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        const user_referred_id = urlParams.get(url_param);

        return user_referred_id;
    }

    function set_url_param_to_form_field(){
        let form_input_hidden_field = document.getElementById('user_referred_by_id');
        form_input_hidden_field.value = supplier_registration_url_param_get('user_referred_by');
    }

    function supplier_registration_checked_checkbox() {
        var reg_submit_btn = document.getElementById('supplier_registration_submit_btn');

        var checkbox_element1 = document.getElementById('supplier_registration_agree_checkbox1');
        var checkbox_element2 = document.getElementById('supplier_registration_agree_checkbox2');
        var checkbox_element3 = document.getElementById('supplier_registration_agree_checkbox3');
        
        checkbox_element1.onchange = function(event){
            var checkbox1 = event.target;

            if (checkbox1.checked && checkbox_element2.checked && checkbox_element3.checked) {
                reg_submit_btn.removeAttribute('disabled');
                reg_submit_btn.style.cursor = 'pointer';
            } else {
                reg_submit_btn.setAttribute("disabled", "disabled");
                reg_submit_btn.removeAttribute('style');
            }
        };

        checkbox_element2.onchange = function(event){
            var checkbox2 = event.target;

            if (checkbox_element1.checked && checkbox2.checked && checkbox_element3.checked) {
                reg_submit_btn.removeAttribute('disabled');
                reg_submit_btn.style.cursor = 'pointer';
            } else {
                reg_submit_btn.setAttribute("disabled", "disabled");
                reg_submit_btn.removeAttribute('style');
            }
        };

        checkbox_element3.onchange = function(event){
            var checkbox3 = event.target;

            if (checkbox_element1.checked && checkbox_element2.checked && checkbox3.checked) {
                reg_submit_btn.removeAttribute('disabled');
                reg_submit_btn.style.cursor = 'pointer';
            } else {
                reg_submit_btn.setAttribute("disabled", "disabled");
                reg_submit_btn.removeAttribute('style');
            }
        };
    }

    function supplier_registration_form_submit(){

        let supplier_reg_form = document.getElementById('supplier_registration_form');
        let supplier_reg_submit_btn = document.getElementById('supplier_registration_submit_btn');
        
        supplier_reg_submit_btn.onclick = function(e){
            e.preventDefault();

            let error_show_div = document.getElementById('supplier_form_validation');
            error_show_div.innerHTML = '';
            error_show_div.removeAttribute('style');

            var form_element = document.getElementsByClassName('supplier_reg_form_data');

            var formData = new FormData();

            for(var i = 0; i < form_element.length; i++)
            {
                formData.append(form_element[i].name, form_element[i].value);
            }

            e.target.disabled = true;

            // Creating Our XMLHttpRequest object
            var xhr = new XMLHttpRequest();
        
            // Making our connection
            var url = supplier_reg_form.getAttribute('action');
            xhr.open("POST", url, true);

            xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            // Sending our request 
            xhr.send(formData);

            // function execute after request is successful 
            xhr.onreadystatechange = function () {
                if (this.readyState == 4) {

                    if(this.status == 200){

                        e.target.disabled = false;

                        let redirect_url = JSON.parse(this.responseText).redirect_url;

                        window.open(redirect_url, "_blank");
                        
                    }else if(this.status == 422){

                        e.target.disabled = false;

                        let error_show = '';

                        let error_list = JSON.parse(this.responseText).error_list;

                        if(error_list.length > 0){
                            error_list.forEach(function (value, index){
                                error_show += value + "<br>";
                            });
                        }

                        if(error_show != ''){
                            let error_show_div = document.getElementById('supplier_form_validation');
                            error_show_div.innerHTML = error_show;

                            error_show_div.style.backgroundColor = 'red';
                            error_show_div.style.color = 'white';
                            error_show_div.style.padding = '10px';
                            error_show_div.style.fontSize = '14px';
                            error_show_div.style.fontFamily = 'Helvetica Neue",Helvetica,Arial,sans-serif !important';
                        }
                    }

                }
            }
        }
    }

    // When the user clicks on (span) (x), close the modal
    function supplier_registration_widgets_agb_closeModal(){
        /* Get close button */
        var closeButton = document.getElementsByClassName("supplier_widgets_agb_close")[0];
    
        // Get the modal
        var modal = document.getElementById("supplier_widgets_agb_n_policy_display_modal");
    
        closeButton.onclick = function() {
            modal.style.display = "none";
        }
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        var agb_n_policy_modal = document.getElementById("supplier_widgets_agb_n_policy_display_modal");

        if (event.target == agb_n_policy_modal) {
            event.target.style.display = "none";
        }
    }



    /*-------------------------------------------
    ---------------- VALIDATION API -------------
    -------------------------------------------*/ 
    // Konfiguration und spezifische Anpassungen.
    if (undefined === window.EnderecoIntegrator) {
        window.EnderecoIntegrator = {};
    }
    if (!window.EnderecoIntegrator.onLoad) {
        window.EnderecoIntegrator.onLoad = [];
    }

    // Hilfsfunktion. Damit lässt sich initAMS aufrufen, auch wenn die funktion noch nicht initiert ist.
    // Bessere Art und Weise wäre ein Proxy Objekt.
        function enderecoInitAMS(prefix, config) {
            if (undefined !== window.EnderecoIntegrator.initAMS) {
                window.EnderecoIntegrator.initAMS(prefix, config);
            } else {
                window.EnderecoIntegrator.onLoad.push(function () {
                    window.EnderecoIntegrator.initAMS(prefix, config);
                });
            }
        }

        function enderecoInitPhoneServices(prefix, config) {
            if (undefined !== window.EnderecoIntegrator.initPhoneServices) {
                window.EnderecoIntegrator.initPhoneServices(prefix, config);
            } else {
                window.EnderecoIntegrator.onLoad.push(function () {
                    window.EnderecoIntegrator.initPhoneServices(prefix, config);
                });
            }
        }

        function enderecoInitEmailServices(prefix, config) {
            if (undefined !== window.EnderecoIntegrator.initEmailServices) {
                window.EnderecoIntegrator.initEmailServices(prefix, config);
            } else {
                window.EnderecoIntegrator.onLoad.push(function () {
                    window.EnderecoIntegrator.initEmailServices(prefix, config);
                });
            }
        }

        function enderecoLoadAMSConfigLoad() {
            window.EnderecoIntegrator.defaultCountry = 'DE';
            window.EnderecoIntegrator.themeName = 'my-theme';
            window.EnderecoIntegrator.defaultCountrySelect = false; // Feature "Preselect country"
            window.EnderecoIntegrator.config.apiUrl = 'https://drm.software/api/drm-validation-api';
            window.EnderecoIntegrator.config.apiKey = 'invalidtokeninvalidtokeninvalidtokeninvalidtoke'; // Hier kommt Dein API Key.
            window.EnderecoIntegrator.config.showDebugInfo = true;
            window.EnderecoIntegrator.config.remoteApiUrl = 'http://endereco-service.de/rpc/v1';
            window.EnderecoIntegrator.config.trigger.onblur = true;
            window.EnderecoIntegrator.config.trigger.onsubmit = true;
            window.EnderecoIntegrator.config.ux.smartFill = true;
            window.EnderecoIntegrator.config.ux.checkExisting = true;
            window.EnderecoIntegrator.config.ux.resumeSubmit = true;
            window.EnderecoIntegrator.config.ux.useStandardCss = true;
            window.EnderecoIntegrator.config.ux.showEmailStatus = true;
            window.EnderecoIntegrator.config.ux.allowCloseModal = true;
            window.EnderecoIntegrator.config.ux.confirmWithCheckbox = true;
            window.EnderecoIntegrator.config.ux.changeFieldsOrder = false;
                        window.EnderecoIntegrator.config.ux.showPhoneErrors = true;
                        window.EnderecoIntegrator.config.phoneFormat = "E164";
                        window.EnderecoIntegrator.config.ux.showPhoneFlag = false;
            window.EnderecoIntegrator.countryMappingUrl = '';
            window.EnderecoIntegrator.config.templates.primaryButtonClasses = 'btn btn-primary btn-lg text-black';
            window.EnderecoIntegrator.config.templates.secondaryButtonClasses = 'btn btn-secondary btn-lg';
            window.EnderecoIntegrator.config.texts = {
                popUpHeadline: 'Adresse prüfen',
                popUpSubline: 'Die von Ihnen eingegebene Adresse scheint nicht korrekt oder unvollständig zu sein. Bitte wählen Sie die korrekte Adresse aus.',
                mistakeNoPredictionSubline: 'Ihre Adresse konnte nicht verifiziert werden. Bitte prüfen Sie Ihre Eingabe und ändern oder bestätigen sie.',
                notFoundSubline: 'Ihre Adresse konnte nicht verifiziert werden. Bitte prüfen Sie Ihre Eingabe und ändern oder bestätigen sie.',
                confirmMyAddressCheckbox: 'Ich bestätige, dass meine Adresse korrekt und zustellbar ist.',
                yourInput: 'Ihre Eingabe:',
                editYourInput: '(bearbeiten)',
                ourSuggestions: 'Unsere Vorschläge:',
                useSelected: 'Auswahl übernehmen',
                confirmAddress: 'Adresse bestätigen',
                editAddress: 'Adresse bearbeiten',
                warningText: 'Falsche Adressen können zu Problemen in der Zustellung führen und weitere Kosten verursachen.',
                popupHeadlines: {
                    general_address: 'Adresse prüfen',
                    billing_address: 'Rechnungsadresse prüfen',
                    shipping_address: 'Lieferadresse prüfen',
                },
                statuses: {
                    email_not_correct: 'Die E-Mail Adresse scheint nicht korrekt zu sein.',
                    email_cant_receive: 'Das E-Mail Postfach ist nicht erreichbar.',
                    email_syntax_error: 'Prüfen Sie die Schreibweise.',
                    email_no_mx: 'Die E-Mail Adresse existiert nicht. Prüfen Sie die Schreibweise.',
                    building_number_is_missing: 'Keine Hausnummer enthalten.',
                    building_number_not_found: 'Diese Hausnummer wurde nicht gefunden.',
                    street_name_needs_correction: 'Die Schreibweise der Straße ist fehlerhaft.',
                    locality_needs_correction: 'Die Schreibweise des Ortes ist fehlerhaft.',
                    postal_code_needs_correction: 'Die PLZ ist ungültig.',
                    country_code_needs_correction: 'Die eingegebene Adresse wurde in einem anderen Land gefunden.',
                                        phone_invalid: "Die Rufnummer existiert nicht oder ist nicht erreichbar.",
                                        phone_format_needs_correction: "Die Rufnummer ist falsch geschrieben.",
                                        phone_should_be_fixed: "Es wird eine Festnetznummer erwartet",
                                        phone_should_be_mobile: "Es wird eine Mobilfunknummer erwartet"
                },
                            "requiredFormat": {
                                "E164": "Format E.164 wird erwartet",
                                "INTERNATIONAL": "Internationaler format wird erwartet",
                                "NATIONAL": "Nationaler Format wird erwartet",
                            }
            };
            window.EnderecoIntegrator.activeServices = {
                ams: true,
                emailService: true,
                personService: true,
                phs: true
            }

            const countryMapping = JSON.parse('{!!$countriesJson!!}');
            const countryReverseMapping = JSON.parse('{!!$countriesRevJson!!}');

            // Country matching functions.
            EnderecoIntegrator.resolvers.countryCodeWrite = function (value) {
                return new Promise(function (resolve, reject) {
                    value = value.split(' ').map(item => item.toLowerCase().replace(/\w/, sp => sp.toUpperCase())).join(' ').trim();
                    resolve(countryMapping[value]?.id);
                });
            }
            EnderecoIntegrator.resolvers.countryCodeRead = function (value) {
                return new Promise(function (resolve, reject) {
                    resolve(countryReverseMapping[value]?.name);
                });
            }

            // Execute all function that have been called throughout the page.
            window.EnderecoIntegrator.onLoad.forEach(function (callback) {
                callback();
            });

            window.EnderecoIntegrator.ready = true;
        }

    // Setup validation UI
    function supplier_registration_widgets_loadDrmValidationUi() {
        let script = document.createElement('script');
        script.src = "{{asset('js/endereco.min.js')}}";
        script.defer = true;
        script.async = true;
        document.head.append(script);
        script.onload = function() {

            enderecoLoadAMSConfigLoad();

            enderecoInitPhoneServices({
                phone: '#supplier-widgets-feedback-form input[name="phone"]',
                // countryCode: '.customer_input[name="country"]'
            }, {
                'name': 'general'
                // group: 'form-1'
            });

            enderecoInitEmailServices({
                email: '#supplier-widgets-feedback-form input[name="email"]',
            }, {
                name: 'first_email'
            });

            // Billing
            enderecoInitAMS({
                countryCode: '#supplier-widgets-feedback-form select[name="country_id"]',
                postalCode: '#supplier-widgets-feedback-form input[name="zip"]',
                locality: '#supplier-widgets-feedback-form input[name="city"]',
                streetFull: '#supplier-widgets-feedback-form textarea[name="address"]',

                addressStatus: '[name="billing_address_status"]',
                addressTimestamp: '[name="billing_address_ts"]',
                addressPredictions: '[name="billing_address_predictions"]',
            }, {
                name: 'billing_info_ams',
                addressType: 'billing_address'
            });





        };


    }
    /*-------------------------------------------
    ------------- VALIDATION API END ------------
    -------------------------------------------*/ 

})();
