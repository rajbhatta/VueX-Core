# Adding vuex dependency to the app #
```js
npm add vuex --save
```

## Modification after adding Vuex to the project ##
```js
{
  "name": "vuex-example-1",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  },
  "dependencies": {
    "core-js": "^3.6.5",
    "vue": "^2.6.11",
    "vuex": "^3.6.2"
  },
  "devDependencies": {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    "eslint": "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11"
  },
  "eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "parserOptions": {
      "parser": "babel-eslint"
    },
    "rules": {}
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not dead"
  ]
}
```
- <b> Note: </b> make sure vuex dependency is added 

```js
"vuex": "^3.6.2"
```

## Create store using vstore vuetur tool ##
```js

store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        key: value
    }
});
```

## Register the store inside the main.js ##
```js

main.js

import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```

### Modify store to hold the data that we need to migrate from App.vue ###
```js

store.js

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

# Final app.vue content #
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



