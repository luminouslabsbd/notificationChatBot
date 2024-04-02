const whatsapp_template = `
    <div class="ll-template-new-system">
        <div class="ll-template-name-main">
            <label class="ll-template-name-felid">
                <input type="text" placeholder="Name" />
                <span class="ll-template-name-placeholder">Name</span>
            </label>
            <p class="ll-template-allowed-notification">Only alphabers, number and space is allowed</p>
        </div>

        <div class="ll-template-meassage-area">
            <label class="ll-template-ui-form-input-container">
                <textarea class="ll-template-ui-form-input" id="word-count-input" rows="6" cols="30"
                    placeholder="SMS Message"></textarea>
                <span class="ll-template-form-input-label">Message</span>
            </label>
            <p class="ll-template-allowed-notification">please fill out this field.</p>
        </div>

        <select class="ll-template-select-box">
            <option value="option1">Select Variable</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option3">Option 4</option>
            <option value="option4">Option 5</option>
        </select>
        <div class="ll-template-button">
            <button class="ll-template-save">Save</button>
        </div>
    </div>
`;

export { whatsapp_template };