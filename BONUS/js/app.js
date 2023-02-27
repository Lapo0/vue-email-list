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
                // console.log(res.data.response)

                // assegnare alla mail il nome della mail
                const email = res.data.response

                // pushare la mail all'interno dell'array
                this.emails.push(email)

                // condizione per cui se nell'array di mail ci sono 10 mail le può mostrare
                if (this.emails.length === 10) {
                    this.visibleEmails = true
            }
        })
        }
    },
    mounted() {
        // ciclo per creare le mail da ripetere per 10 volte
        for (let i = 0; i < 10; i++) {
            this.createEmail()
        }
    },

}).mount('#app')