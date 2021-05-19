<template>
  <div id="product-list-two">
    <div><b>This is product list two</b></div>
    
    <ul>
        <li v-for="d in doneTodos" v-bind:key="d"> 
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
    ...mapGetters(['doneTodos'])
  }
}
</script>