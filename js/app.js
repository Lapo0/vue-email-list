const { createApp } = Vue

createApp({
    data() {
        return {
        email: '',
        emails: [],
        }
    },
    methods: {
        createEmail() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
                this.email = res.data.response
                this.emails.push(this.email)
        })
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            this.createEmail()
        }
    }
}).mount('#app')