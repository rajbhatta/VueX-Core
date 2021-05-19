## What is list of array in mapGetters? ##
mapGetters can list of array inside the helper, which is shown.

```js
computed() {
     ...mapGetters(['getAnimalArrayFromGetterHelper','getSportArrayFromGetterHelper','getSalaryArrayFromGetterHelper'])
}
```

# Example of using list of array #

```js
  
  store.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      animalArray:[
        { id: 1, name: 'COW', done: true },
        {id: 2, name:'DOG', done:false},
        {id:3, name: 'ELEPHANT', done:true}
      ],
      sportArray:[
        {id:'A', name:'Football', rate:2},
        {id:'B', name:'Hockey', rate:1}
      ],
      salaryArray:[
        {id:'I', name:'Employee', range:'$70000'}
      ]
    },
    getters: {
      getAnimalArrayFromGetterHelper: state => {
        return state.animalArray
      },
      getSportArrayFromGetterHelper: state => {
        return state.sportArray
      },
      getSalaryArrayFromGetterHelper: state => {
        return state.salaryArray
      } 
    }
  });
  
```

```js

ProductListOne.vue

<template>
  <div id="product-list-one">
    <div><b>This is SportArray</b></div>
    <ul>
        <li v-for="animal in getAnimalArrayFromGetterHelper" v-bind:key="animal"> 
          {{animal.id}}
          {{animal.text}}
          {{animal.done}}
          </li>
    </ul>
    <div><b>This is Animal Array</b></div>
    <ul>
        <li v-for="sport in getSportArrayFromGetterHelper" v-bind:key="sport"> 
          {{sport.id}}
          {{sport.name}}
          {{sport.rate}}
          </li>
    </ul>
    <div><b>This is Salary Array</b></div>
    <ul>
        <li v-for="salary in getSalaryArrayFromGetterHelper" v-bind:key="salary"> 
          {{salary.id}}
          {{salary.name}}
          {{salary.range}}
          </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getAnimalArrayFromGetterHelper','getSportArrayFromGetterHelper','getSalaryArrayFromGetterHelper'])
  }
}
</script>

```

- Notes <br/>
- ...mapGetters name and getters name on the store must be same. Otherwise we won't be able to populate the data.