
(function(){

    document.addEventListener("DOMContentLoaded", function(event) {
        if(document.getElementById('notification_luminous_labs')){
            supplier_registration_widgets_init();
            supplier_registration_widgets_setStyles(styles);
            supplier_country_list();
            set_url_param_to_form_field();
            supplier_registration_checked_checkbox();
            supplier_registration_form_submit();
            
            supplier_registration_widgets_agb_and_policy_display();
        }
    });

    function supplier_registration_widgets_init(){
        let mainDiv = document.getElementById('notification_luminous_labs');
    
        $supplier_embed_form = `
                            <div class="ll-notified-wrapper">

                                <div class="ll-notified-tab-wrapper">
                                    <ul class="ll-notified-tabs">
                                        <li class="ll-notified-tab-link active" data-tab="1">Email</li>
                                        <li class="ll-notified-tab-link" data-tab="2">WhatsApp</li>
                                    </ul>
                                </div>

                                <div class="ll-notified-content-wrapper">

                                    <div id="tab-1" class="ll-notified-tab-content active">
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
                                                        <span class="ll-notified-chatbot-add-icon">+</span>
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
                                                        <span class="ll-notified-chatbot-add-icon">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ll-notified-chatbot-radio-button-parent">
                                                <div class="ll-notified-chatbot-radio-item">
                                                    <input type="radio" id="sand_now" name="sand_schedule" value="sand_now" checked>
                                                    <label for="sand_now">Sand Now</label>
                                                </div>
                                                <div class="ll-notified-chatbot-radio-item">
                                                    <input type="radio" id="schedule" name="sand_schedule" value="schedule">
                                                    <label for="schedule">Schedule</label>
                                                </div>


                                            </div>
                                            <div class="ll-notified-chatbot-test-inputfelid">
                                                <button class="ll-notified-chatbot-form-text">Test</button>
                                                <input type="email" placeholder="test@gmail.com" required>
                                            </div>
                                            <button class="ll-notified-chatbot-form-sand">Sand</button>
                                        </form>
                                    </div>

                                    <div id="tab-2" class="ll-notified-tab-content">
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
                                                        <span class="ll-notified-chatbot-add-icon">+</span>
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
                                                        <span class="ll-notified-chatbot-add-icon">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="ll-notified-chatbot-radio-button-parent">
                                                <div class="ll-notified-chatbot-radio-item">
                                                    <input type="radio" id="sand_now" name="sand_schedule" value="sand_now" checked>
                                                    <label for="sand_now">Sand Now</label>
                                                </div>
                                                <div class="ll-notified-chatbot-radio-item">
                                                    <input type="radio" id="schedule" name="sand_schedule" value="schedule">
                                                    <label for="schedule">Schedule</label>
                                                </div>


                                            </div>
                                            <div class="ll-notified-chatbot-test-inputfelid">
                                                <button class="ll-notified-chatbot-form-text">Test</button>
                                                <input type="number" placeholder="0987654" required>
                                            </div>
                                            <button class="ll-notified-chatbot-form-sand">Sand</button>
                                        </form>
                                    </div>

                                </div>

                            </div>
                        `;

        mainDiv.innerHTML = $supplier_embed_form;
    }

    const styles = `
        .ll-notified-wrapper {
            max-width: 800px;
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
            padding: 20px 40px;
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
            font-size: 20px;
            min-width: 200px;
        }

        .ll-notified-email-tabs-select {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .ll-notified-chatbot-parent {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        .ll-notified-email-tabs-select select#template {
            padding: 10px 10px 10px 10px;
            border: 1px solid #ddd;
            background-color: transparent;
            font-size: 18px;
            width: 300px;
            outline: none;
            border-radius: 6px;
            color: #565050;
        }

        span.ll-notified-chatbot-add-icon {
            height: 40px;
            border-radius: 22px;
            width: 50px;
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
            margin-top: 50px;
        }

        .ll-notified-chatbot-radio-item label {
            font-size: 18px;
        }

        .ll-notified-chatbot-radio-item input {
            width: 20px;
            height: 20px;
            margin: 0px;
            cursor: pointer;
        }

        .ll-notified-chatbot-radio-item {
            display: flex;
            align-items: center;
            gap: 7px;
        }

        .ll-notified-chatbot-form-sand {
            padding: 10px 30px;
            background-color: rgb(75 170 255);
            /* color: rgb(59, 53, 53); */
            color: rgb(255, 255, 255);
            font-size: 20px;
            border-radius: 22px;
            border: none;
            margin-top: 50px;
            cursor: pointer;
        }

        .ll-notified-chatbot-test-inputfelid input {
            padding: 10px 10px 10px 10px;
            border: 1px solid #ddd;
            background-color: transparent;
            font-size: 20px;
            outline: none;
            border-radius: 6px;
            color: #565050;
        }

        .ll-notified-chatbot-form-text {
            padding: 10px 30px;
            background-color: rgb(75 170 255);
            /* color: rgb(59, 53, 53); */
            color: rgb(255, 255, 255);
            font-size: 20px;
            border-radius: 22px;
            border: none;
            cursor: pointer;
        }

        .ll-notified-chatbot-test-inputfelid {
            margin-top: 50px;
            display: flex;
            justify-content: end;
            gap: 7px;
        }

        .ll-notified-inner-chatbot-parent {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: #d0d0d02b;
            padding: 10px 20px;
            border-radius: 10px;
        }

        .ll-notified-chatbot-select-parent {
            display: flex;
            align-items: center;
            gap: 5px;
            background-color: #d0d0d02b;
            padding: 10px 20px;
            border-radius: 10px;
        }

        @keyframes ll-fadeIn {
            100% {
                opacity: 1;
                transform: none;
            }
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

})();
