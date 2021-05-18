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