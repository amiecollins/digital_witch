export default {
    data: function () {
        return {
            sumbitted: false,
            form: {
                top: [
                    {
                        name: "name",
                        type: "name",
                        value: ""
                    },
                    {
                        name: "company",
                        type: "text",
                        value: ""
                    },
                    {
                        name: "email",
                        type: "email",
                        value: ""
                    },
                    {
                        name: "phone",
                        type: "phone",
                        value: ""
                    }
                ],
                concerning: {
                    value: "",
                    options: [
                        "general", "wholesale inquiry", "custom design request", "business inquiry", "tarot reading appointment"
                    ]
                },
                message: "",
                errors: [

                ]
            }
        }
    },
    
    methods: {
        check: function () {
            
        }
    },

    template: `
    <section id="contact">
        <h2 class="contact-title">Drop Me A Line</h2>
        <div v-if="submitted === true" class="contact-thanks">
            <h3>Thank you for your valued interest and time.</h3>
            <p>Your message was recieved successfully is now being recorded by scribes to be delievered with care to Digital Witch or one of her trusted affiliates.</p>
            <p>Response will be returned as soon as possible, we appriciate your patience until then.</p>
            <span>With great respect and gratitude,</span>
            <span class="contact-sign">Digital Witch</span>
        </div>

        <form v-if="submitted === false" id="contact-form" @submit="check" action="">
            <div v-for="item in form.top" class="form-item">
                <label :for="item.name" v-text="item.name + ':'"></label>
                <input :id="item.name" v-model="item.value" :type="item.type" :name="item.name">
            </div>
            <div class="form-item">
                <label for="concerning">Concerning:</label>
                <select id="concerning" v-model="form.concerning.value" name="concerning">
                    <option v-for="option in concerning.options" v-text="option"></option>
                </select>
            </div>
            <textarea id="form-message" name="message" id="message" v-model="form.message"></textarea>
            <div class="errors" v-if="form.errors === true">
                Please include at least your <label for="name">name</label>, <label for="email">email</label> and a <label for="message">message</label>.
            </div>
            <input class="form-submit" type="submit" value="Send">
        </form>
        
    </section>
    `
}