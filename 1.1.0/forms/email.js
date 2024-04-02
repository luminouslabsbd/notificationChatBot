const email_form = `
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
                </div>
                <div class="ll-notified-chatbot-test-inputfelid">
                    <button class="ll-notified-chatbot-form-text">Test</button>
                    <input type="number" placeholder="test@gmail.com" required>
                </div>
                <button class="ll-notified-chatbot-form-send">Send</button>
            </form>
        </div>
    </div>
`;

export {email_form};