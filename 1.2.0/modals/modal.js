function createModal(){
    // Element Start >>>>
    let newDiv = document.createElement('div');

    newDiv.setAttribute('id', 'll_campaign_modal');
    newDiv.setAttribute('class', 'll_notify_modal');
    // Element End <<<<

    // Element Start >>>>
    let modalContent = document.createElement('div');
    modalContent.setAttribute('class', 'll_notify_modal_content');
    // Element End <<<<
    newDiv.appendChild(modalContent);

    // Element Start >>>>
    let modalHeader = document.createElement('div');
    modalHeader.setAttribute('class', 'll_notify_modal_header');
    // Element End <<<<
    modalContent.appendChild(modalHeader);

    // Element Start >>>>
    let modalHeaderSpan = document.createElement('span');
    modalHeaderSpan.setAttribute('id', 'll_notify_modal_header_span');
    // Element End <<<<
    modalHeader.appendChild(modalHeaderSpan);

    // Element Start >>>>
    let modalHeaderClose = document.createElement('span');
    modalHeaderClose.setAttribute('class', 'll_notify_modal_close');
    modalHeaderClose.innerHTML = '&times;';
    // Element End <<<<
    modalHeader.appendChild(modalHeaderClose);

    // Element Start >>>>
    let modalBody = document.createElement('div');
    modalBody.setAttribute('class', 'll_notify_modal_body');
    modalBody.setAttribute('id', 'll_notify_display_modal_body');
    // Element End <<<<
    modalContent.appendChild(modalBody);

    // Element Start >>>>
    let modalFooter = document.createElement('div');
    modalFooter.setAttribute('class', 'll_notify_modal_footer');
    modalFooter.innerHTML = '';
    // Element End <<<<
    modalContent.appendChild(modalFooter);

    document.body.appendChild(newDiv);
}

function showModal(){
    // Get the modal
    var modal = document.getElementById("ll_campaign_modal");
    modal.style.display = "block";
}

function hideModal(){
    // hide modal after empty the modal

    var modal_body = document.getElementById("ll_notify_display_modal_body");
    modal_body.innerHTML = ``;

    var modal = document.getElementById("ll_campaign_modal");
    modal.style.display = "none";
}

// By clicks on (span) (x), close the modal
function closeModal(){
    var closeButton = document.getElementsByClassName("ll_notify_modal_close")[0];

    closeButton.onclick = function() {
        hideModal()
    }
}

function thankYouModal(message){
    hideModal();

    var html = `
        <div>
            <h3 style="text-align: center; color: green;">
                ${message}
            </h3>
        </div>
    `;

    var modal_header = document.getElementById('ll_notify_modal_header_span');
    var modal_body = document.getElementById('ll_notify_display_modal_body');

    modal_header.innerHTML = ``;
    modal_body.innerHTML = html;

    showModal();
}

export { createModal, showModal, hideModal, closeModal, thankYouModal };