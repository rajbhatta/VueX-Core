<template>
  <div id="product-list-two">
    <div><b>This is product list two</b></div>
    
    <ul>
        <li v-for="product in saleProducts" v-bind:key="product"> 
          {{product.name}} &nbsp; &nbsp;
          {{product.price}}
          </li>
    </ul>

    <button v-on:click="reducePrice">Reduce Price </button>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['saleProducts'])
  },
  methods: {
    reducePrice: function() {
      this.$store.commit('reducePrice');
    }
  },
}
</script>