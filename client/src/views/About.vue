<template>
  <div id="app">
   
    <AddPrinciple v-bind:principles="principles" v-on:add-principle="addPrinciple"/>
    <div class="Main-display">
      <div class="Principles-display"><Principles v-bind:principles="principles" v-on:del-principle="delPrinciple"/></div>
    </div>
  </div>
</template>

<script>

import AddPrinciple from '../components/AddPrinciple'
import Principles from '../components/Principles.vue'


export default {
  name: 'Principle',
  components: {
    AddPrinciple,
    Principles,
  },
  data() {
    return {
      principles : [
        // {
        //   id : 1,
        //   title : "Individuals and interactions over processes and tools",
        //   modify : false
        // },
        // {
        //   id : 2,
        //   title : "Working product over comprehensive documentation",
        //   modify : false
        // },
        // {
        //   id : 3,
        //   title : "Customer collaboration over contract negotiation",
        //   modify : false
        // },
        // {
        //   id : 4,
        //   title : "Responding to change over following a plan",
        //   modify : false
        // },
      ],
    }
  },
  methods:{
    delPrinciple(id){
      this.principles = this.principles.filter(principle => principle.id !== id);

    },
    addPrinciple(newPrinciple){
      this.principles = [...this.principles, newPrinciple];

    }
  }
}
</script>

<style>
#app {
margin: 0;
padding:0;
}

.Main-display{
  display: flex;
  align-items: center;
}

.Principles-display{
  flex: 1;
}

.Principle-display{
  flex: 1;
}
</style>
