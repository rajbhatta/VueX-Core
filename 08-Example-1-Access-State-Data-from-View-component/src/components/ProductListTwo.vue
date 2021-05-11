<template>
  <div id="product-list-two">
      <div><b>This is product list two</b></div>
       <ul>
        <li v-for="product in products" v-bind:key="product"> 
          {{product.name}}
          {{product.qtn}}
          </li>
    </ul>
  </div>
</template>

<script>
export default {
   computed: {
    products() {
      return this.$store.state.products
    }
  }

}
</script>