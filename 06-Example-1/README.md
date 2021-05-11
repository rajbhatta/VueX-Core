# vuex-example-1

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
# Source Code Before integrating Vuex #
```js
    app.vue

<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  name: 'App',
  data() {
    return {
      products: [
        {name:'Apple', qtn:30},
        {name:'Ball', qtn:30},
         {name:'Cat', qtn:30},
         {name:'Dog', qtn:30}
         ]
    }
  },
  components: {
    ProductListOne,
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
```

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
  props: ['products'],
  name: 'ProductListOne',

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
   props: ['products'],
  name: 'ProductListTwo',

}
</script>
```

## Output ##
<img src="img/img1.png">
