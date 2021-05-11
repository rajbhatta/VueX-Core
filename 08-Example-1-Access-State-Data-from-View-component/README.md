# Getting Vuex State into Vue Components #
- The simplest way to "retrieve" state from it is simply returning some store state from within a computed property.


```js

ProductListOne.vue

<template>
  <div id="product-list-one">
    <div><b>This is product list one</b></div>
    
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

```

```js

ProductListTwo.vue

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

```

