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