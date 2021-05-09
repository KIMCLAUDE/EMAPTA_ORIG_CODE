<template>
  <div id="app">
   
    <AddValue v-bind:values="values" v-on:add-value="addValue"/>
    <div class="Main-display">
      <div class="Values-display"><Values v-bind:values="values" v-on:mark-modify="markModify" v-on:del-value="delValue"/></div>
    </div>
  </div>
</template>

<script>

import AddValue from '../components/AddValue'
import Values from '../components/Values.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    AddValue,
    Values,
  },
  data() {
    return {
      values : [
       
      ],
    }
  },
  methods:{
    markModify(id){
      const obj_id = this.values.findIndex(value => value.id == id)
      console.log(obj_id);
      console.log(id)
      axios.put(`http://localhost:5000/api/values/${id}`)
      
     .then( res => this.values[id] = res.data)

      .catch(error =>{
        return Promise.reject(error);
      })
    alert('Updated Successfully');
    document.location.reload();
    },
    delValue(id){
      var answer = window.confirm("Are you sure to delete this data?");
      if (answer) {
          //some code
        axios.delete(`http://localhost:5000/api/values/${id}`)

        .then(res => {
          this.values = this.values.filter(value => value.id !== id)
          return res
        })
        .catch(error =>{
          return Promise.reject(error);
        })
      }
      else {
          //some code
      }
      
      //this.values = this.values.filter(value => value.id !== id);
    },
    addValue(newValue){
      const {title, is_modify} = newValue;

      axios.post('http://localhost:5000/api/values', {
        title,
        is_modify
      })
      .then(res => this.values = [...this.values, res.data])
      .catch(error =>{
        return Promise.reject(error);
      })
      //this.values = [...this.values, newValue];
    alert('Added Successfully');
    document.location.reload();
    }
  },
  created(){
      /* eslint-disable no-debugger */
      axios.get('http://localhost:5000/api/values', {mode: 'cores'})
    
      .then( res => this.values = res.data)
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

.Values-display{
  flex: 1;
}

.Principle-display{
  flex: 1;
}
</style>
