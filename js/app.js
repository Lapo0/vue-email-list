const { createApp } = Vue

axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((res) => {
        // res  = risposta del resrver
        // res.data = dati contenuti nella risposta
        console.log(res.data.response)
})


  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')