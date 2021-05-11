# 1. What is getters ? #
- Sometimes we may need to compute derived state based on store state, for example filtering through a list of items and counting them:

# 2. Source code containing problems #
- Let's say we want to reduce the quantity by half and reflct that across all the components.
```js

ProductListOne.vue

<template>
  <div id="product-list-one">
    <div><b>This is product list one</b></div>
    
    <ul>
        <li v-for="product in saleProduct" v-bind:key="product"> 
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
      return this.$store.state.products
    },
    saleProduct(){
      var saleProducts=this.$store.state.products.map(product =>{
        return {
          name: '**'+product.name+'***',
          qtn: product.qtn/2
        }
      })
      return saleProducts;
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
        <li v-for="product in saleProducts" v-bind:key="product"> 
          {{product.name}}
          {{product.qtn}}
          </li>
    </ul>
  </div>
</template>

<script>
export default {
   products(){
      return this.$store.state.products
    },
    saleProduct(){
      var saleProducts=this.$store.state.products.map(product =>{
        return {
          name: '**'+product.name+'***',
          qtn: product.qtn/2
        }
      })
      return saleProducts;
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

- In the above program, we saw that ProductListOne.vue and ProductListTwo.vue are having duplicate code of
```js
saleProduct(){
      var saleProducts=this.$store.state.products.map(product =>{
        return {
          name: '**'+product.name+'***',
          qtn: product.qtn/2
        }
      })
      return saleProducts;
    }
  ```

  - If we need to perform the same operation for 10 components then we need to write repeated code. Thus, we can solve this issue by Getter.

  # Solution using Getter #
  - To solve the above specified issue, we can store inside the store and use that throughout the program
  
  ```js
saleProduct(){
      var saleProducts=this.$store.state.products.map(product =>{
        return {
          name: "****",
          qtn: product.qtn/2
        }
      })
      return saleProducts;
    }
  ```

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
export default {
   products(){
      return this.$store.state.products;
    },
    saleProducts(){
      return this.$store.getters.saleProducts;
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


