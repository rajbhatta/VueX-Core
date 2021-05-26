<template>
  <div id="app">
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    ProductListTwo
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
