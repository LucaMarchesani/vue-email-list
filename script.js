const { createApp } = Vue;

createApp({
  data() {
    return {
        mailList: [],
        randomEmail: null,
        
      
    }
  },
  methods: {
    getRandomEmail(){
        let i = 0;
        while (i < 10){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.randomEmail = response.data.response;
                this.mailList.push(this.randomEmail);
            })
            i++
        }

    }
    
  },

  created() {
    this.getRandomEmail();
  },

}).mount('#app');