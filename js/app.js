const { createApp } = Vue

createApp({
    data() {
        return {
        mail: ''
        }
    },
    methods: {
        createEmail() {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((res) => {
                console.log(res.data.response)
                this.mail = res.data.response
        })
        }
    },
}).mount('#app')