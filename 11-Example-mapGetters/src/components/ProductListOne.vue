<template>
  <div id="product-list-one">
    <div><b>This is product list one</b></div>
    
    <ul>
        <li v-for="product in saleProducts" v-bind:key="product"> 
          {{product.name}}
          {{product.qtn}}
          </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    products(){
      return this.$store.state.products;
    },
    ...mapGetters(['saleProducts'])
  }
}
</script>