<template>
  <div id="app">
      <Header/>
    <div id="nav">
      <router-link to="/">VALUES</router-link> |
      <router-link to="/Principle">PRINCIPLES</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
import Header from './components/Header'

export default {
  name : 'App',
  components:{
    Header
  }
}
</script>>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
