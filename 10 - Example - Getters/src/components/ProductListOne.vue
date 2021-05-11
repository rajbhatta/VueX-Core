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

export default {
  computed: {
    products(){
      return this.$store.state.products;
    },
    saleProducts(){
     return this.$$store.getters.saleProducts;
    }
  }
}
</script>