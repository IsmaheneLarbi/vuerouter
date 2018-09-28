<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Navigation/>
    <Network/>
    <Footer/>
    <router-link to="network/123/20/58">Network</router-link>
    <router-link to="contact">Contact</router-link>
    <router-link to="account">Account</router-link>
    <router-view/>
  </div>
</template>

<script>

import Navigation from "./components/Navigation"
import Network from "./components/Network"
import Footer from "./components/Footer"

export default {
  name: 'App',
  components:{
    Navigation,
    Network,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
