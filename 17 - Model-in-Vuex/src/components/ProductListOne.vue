<template>
  <div id="product-list-one">
    <div><b>This is product list one</b></div>
    
    <ul>
        <li> 
         <b>City</b> {{addressObj.city}}
         <br/><b>Province</b> {{addressObj.province}}
         <br/><b>Distrinct:</b> {{addressObj.district}}
          </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({addressObj: 'getAddressFromGetterHelper'})
  }
}
</script>