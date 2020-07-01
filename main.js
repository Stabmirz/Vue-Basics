Vue.component('Hobby', {
    props:['hobbies'],
    template:
    '<ul><li v-for="hobby in hobbies">{{hobby}}</li></ul>',

})

let App = new Vue({
  el: "#root",
  component:[
    'Hobby'
  ],
  data: {
    greeting: "Hello Abi",
    count:2,
    email:'abi@gmail.com',
    hobbies:[
        'Travelling',
        'Fishing',
        'Playing Cricket'
    ],
    cars:[
        {name:'BMW'},
        {name:'Mercedes'},
        {name:'Audi'},
    ],
    newCar:'',
},
    methods:{
        addCar: function(){
            this.cars.push({name:this.newCar})
            this.newCar='';

        }
    },
    filters:{
        capitalize: function(value){
            return value.toUpperCase();
        },
        autochen: (value)=>{
            return value + 'chen';
        }
    },
    computed: {
        carAdded:function(){
            if(this.newCar.length>3){
                return this.newCar+ '(new)'
            }
        }
    },
    created:function() {
        console.log('Created')
    },
    mounted:function() {
        console.log('Mounted')
    },
    updated:function(){
        console.log('Updated')
    },
    destroyed:function(){
        console.log('Destroyed')
    },
});

// After 5 second the App will be destroyed and nothing will be updated as the connection to Vue is no more alive

// setTimeout(function(){
//     App.$destroy();
// }, 5000)



