## What is array in mapGetters? ##
mapGetters can take an object or an array. So this snippet, which is shown above.

```js
computed() {
    ...mapGetters(['currentUser'])
}
```
Can also be this.

```js
computed() {
    ...mapGetters({currentUser: 'currentUser'})
}
```

# Details of mapGetters helper #
```js
/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
export const mapGetters = normalizeNamespace((namespace, getters) => {
  const res = {}
  normalizeMap(getters).forEach(({ key, val }) => {
    // The namespace has been mutated by normalizeNamespace
    val = namespace + val
    res[key] = function mappedGetter() {
      if (
        namespace &&
        !getModuleByNamespace(this.$store, 'mapGetters', namespace)
      ) {
        return
      }
      if (
        process.env.NODE_ENV !== 'production' &&
        !(val in this.$store.getters)
      ) {
        console.error(`[vuex] unknown getter: ${val}`)
        return
      }
      return this.$store.getters[val]
    }
    // mark vuex getter for devtools
    res[key].vuex = true
  })
  return res
})
```

# Example of using arrays #

  ```js
  
  store.js

  import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      sportsArraysState: [
        { id: 1, text: 'This is my text', done: true },
        { id: 2, text: 'This is another text', done: false }
      ]
    },
    getters: {
      getSportsArray: state => {
        return state.sportsArraysState
      }
    }
  });
  
  ```

  ```js

ProductListOne.vue

<template>
  <div id="product-list-one">
    <div><b>This is product list one</b></div>
    
    <ul>
        <li v-for="d in getSportsArray" v-bind:key="d"> 
          {{d.id}}
          {{d.text}}
          {{d.done}}
          </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getSportsArray'])
  }
}
</script>

```

- Notes ...mapGetters name and getters name on the store must be same. Otherwise we won't be able to populate the data.