const { createApp } = Vue

createApp({
    data() {
        return {
        emails: [],
        visibleEmails: false,
        }
    },
    methods: {
            createEmail() {
            axios 
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
                const email = res.data.response
                this.emails.push(email)

                if (this.emails.length === 10) {
                    this.visibleEmails = true
                }
        })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.createEmail()
        }
    },

}).mount('#app')