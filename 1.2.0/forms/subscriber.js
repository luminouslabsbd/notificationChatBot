const subscriber_form = `
    <form action="https://jsonplaceholder.typicode.com/posts" method="POST" id="ll_notify_sbscrb">
        <div class="ll-subscriber-new-system">
            <div class="ll-subscriber-name-main">
                <label class="ll-subscriber-name-felid">
                    <input type="email" placeholder="E-mail" />
                    <span class="ll-subscriber-name-placeholder">E-mail</span>
                </label>
                <p class="ll-subscriber-allowed-notification">Only alphabers, number and space is allowed</p>
            </div>

            <div class="ll-subscriber-name-feild-parent">
                <div class="ll-subscriber-name-main">
                    <label class="ll-subscriber-name-felid">
                        <input type="text" placeholder="Name" />
                        <span class="ll-subscriber-name-placeholder">Name</span>
                    </label>
                    <p class="ll-subscriber-allowed-notification">Only alphabers, number and space is allowed</p>
                </div>

                <div class="ll-subscriber-status-main">
                    <span class="ll-subscriber-name-placeholder">Status</span>
                    <select class="ll-subscriber-status-select-box">
                        <option value="">Select Variable</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option3">Option 4</option>
                        <option value="option4">Option 5</option>
                    </select>
                    <p class="ll-subscriber-status-notification">Blocaklisted subscribers will never receive any e-mails.
                    </p>
                </div>
            </div>

            <div class="ll-subscriber-number-parent">
                <select class="ll-subscriber-number-select-box">
                    <option value="">Ecuador + 5 93</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option3">Option 4</option>
                    <option value="option4">Option 5</option>
                </select>
                <div class="ll-subscriber-number-main">
                    <label class="ll-subscriber-number-felid">
                        <input type="number" placeholder="Phone" />
                        <span class="ll-subscriber-name-placeholder">Phone</span>
                    </label>
                </div>
            </div>

            <div class="ll-subscriber-list-main">
                <span class="ll-subscriber-list-placeholder">List (0)</span>
                <select class="ll-subscriber-status-select-box">
                    <option value="">Select Variable</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option3">Option 4</option>
                    <option value="option4">Option 5</option>
                </select>
                <p class="ll-subscriber-allowed-notification">Lists form which subscribers have unsubscribers themselves
                    cannot be removed</p>
            </div>

            <div class="ll-subscriber-meassage-area">
                <label class="ll-subscriber-ui-form-input-container">
                    <textarea class="ll-subscriber-ui-form-input" id="word-count-input" rows="6" cols="30"
                        placeholder="{}"></textarea>
                    <span class="ll-subscriber-form-input-label">Attributes</span>
                </label>
                <p class="ll-subscriber-allowed-notification">please fill out this field.</p>
            </div>

            <div class="ll-subscriber-button">
                <button class="ll-subscriber-save">Save</button>
            </div>
        </div>
    </form>
`;

export { subscriber_form };