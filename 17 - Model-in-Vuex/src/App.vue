<template>
  <div id="app">
    <product-list-one></product-list-one>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    ProductListOne
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
