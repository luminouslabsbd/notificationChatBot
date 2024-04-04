const styles = `
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
        width: 100%;
        max-width: 300px;
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
        height: 30px;
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
        width: 100%;
        border-radius: 10px;
        max-width: 340px;
    }

    .ll-notified-chatbot-select-parent {
        display: flex;
        align-items: center;
        gap: 5px;
        background-color: #d0d0d02b;
        padding: 5px 10px;
        border-radius: 10px;
        width: 100%;
        max-width: 300px;
    }

    @media screen and (max-width: 767px) {
        .ll-notified-email-tabs-select {
            flex-direction: column;
            align-items: baseline;
            gap: 2px;
        }

        .ll-notified-chatbot-parent {
            gap: 10px;
        }

        .ll-notified-chatbot-test-inputfelid {
            justify-content: start;
            margin-bottom: 14px;
        }
    }

    @media screen and (max-width: 420px) {
        .ll-notified-chatbot-test-inputfelid {
            flex-direction: column;
            align-items: baseline;
            gap: 10px;
        }

        .ll-notified-tabs {
            gap: 0px;
        }

        .ll-notified-tab-link {
            padding: 6px 27px;
        }

        .ll-notified-chatbot-form-text {
            font-size: 17px;
        }

        .ll-notified-chatbot-form-sand {
            font-size: 17px;
        }
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

    @media screen and (max-width: 767px) {
        label.ll-template-name-felid {
            display: flex;
        }

        span.ll-template-name-placeholder {
            top: -6px;
        }

        .ll-template-ui-form-input-container {
            display: flex;
        }
    }
    /* Templace Start END */
`;

export { styles };