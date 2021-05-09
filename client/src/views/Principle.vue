<template>
  <div id="app">
   
    <AddPrinciple v-bind:principles="principles" v-on:add-principle="addPrinciple"/>
    <div class="Main-display">
      <div class="Principles-display"><Principles v-bind:principles="principles" v-on:mark-modify="markModify" v-on:del-principle="delPrinciple"/></div>
    </div>
  </div>
</template>

<script>

import AddPrinciple from '../components/AddPrinciple'
import Principles from '../components/Principles.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AddPrinciple,
    Principles,
  },
  data() {
    return {
      principles : [
       
      ],
    }
  },
  methods:{
    markModify(id){
      const obj_id = this.principles.findIndex(principle => principle.id == id)
      console.log(obj_id);
      console.log(id)
      axios.put(`http://localhost:5000/api/principles/${id}`)
      
     .then( res => this.principles[id] = res.data)

      .catch(error =>{
        return Promise.reject(error);
      })
      document.location.reload();
    alert('Updated Successfully');
    },
    delPrinciple(id){
      var answer = window.confirm("Are you sure to delete this data?");
      if (answer) {
          //some code
        axios.delete(`http://localhost:5000/api/principles/${id}`)

        .then(res => {
          this.principles = this.principles.filter(principle => principle.id !== id)
          return res
        })
        .catch(error =>{
          return Promise.reject(error);
        })
      }
      else {
          //some code
      }
      
      //this.principles = this.principles.filter(principle => principle.id !== id);
    },
    addPrinciple(newPrinciple){
      const {title, is_modify} = newPrinciple;

      axios.post('http://localhost:5000/api/principles', {
        title,
        is_modify
      })
      .then(res => this.principles = [...this.principles, res.data])
      .catch(error =>{
        return Promise.reject(error);
      })
      //this.principles = [...this.principles, newPrinciple];
    
    }
  },
  created(){
      /* eslint-disable no-debugger */
      axios.get('http://localhost:5000/api/principles', {mode: 'cores'})
    
      .then( res => this.principles = res.data)
      .catch(error =>{
        return Promise.reject(error);
      })
    },
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
