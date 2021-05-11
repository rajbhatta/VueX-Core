# 1. What is mapGetters helper ? #
- It helps to map store getters to local computed properties.

# 2. Complete example #
```js

ProductListOne.vue

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
```

```js

ProductListTwo.vue

<template>
  <div id="product-list-two">
    <div><b>This is product list two</b></div>
    
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
```

```js

store/store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name:'Apple', qtn:30},
            {name:'Ball', qtn:30},
             {name:'Cat', qtn:30},
             {name:'Dog', qtn:30}
             ]
    },
    getters:{
        saleProducts: state =>{
            var saleProducts=state.products.map(product =>{
                return {
                  name: '**'+product.name+'***',
                  qtn: product.qtn/2
                }
              })
              return saleProducts;
        }
    }

});
```

```js

main.js 

import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

Vue.config.productionTip = false

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
```