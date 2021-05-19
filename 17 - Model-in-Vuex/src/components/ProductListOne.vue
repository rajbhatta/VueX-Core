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