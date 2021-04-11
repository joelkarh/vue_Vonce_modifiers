const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'',
      confirmedName:'',
    };
  },
  methods:{
    confirmInput(){
    this.confirmedName = this.name
    },
    submitForm(){
    alert('submitted!')
    },
    onClick(){
      return this.counter+=10
    },
    onReduce(){
      return this.counter-=5
    },
    setName(event,lastName){
      this.name = event.target.value + '' + lastName
    }
  }
});

app.mount('#events');
