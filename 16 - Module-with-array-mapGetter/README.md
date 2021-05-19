## What is Object in mapGetters? ##
mapGetters can take an object or an array. So this snippet, which is shown.

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

# Example of using Object #

```js
  
  store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      sportsObject:
        { id: 1, text: 'This is my text', done: true }
    },
    getters: {
      getSportObjectFromGetterHelper: state => {
        return state.sportsObject
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
        <li> 
          {{sportObject.id}}
          {{sportObject.text}}
          {{sportObject.done}}
          </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({sportObject: 'getSportObjectFromGetterHelper'})
  }
}
</script>

```

- Notes ...mapGetters name and getters name on the store must be same. Otherwise we won't be able to populate the data.