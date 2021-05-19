# Defining model in VueX for SOLID design pattern using ES6 #

## model/Address.js ##
```js
export class Address {
 constructor(city, province,district) {
    this.city = city;
    this.province = province;
    this.district=district;
  }
}

```

## store/store.js ##
```js
import Vue from 'vue';
import Vuex from 'vuex';
import {Address} from '../model/Address';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {  
      addressState:new Address('Test','Test','Test')
    },
    getters: {
      getAddressFromGetterHelper: state => {
        return state.addressState
      }
    }
  });
  ```

  ##  components/ProductListOne.vue ##
  ```js
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
```