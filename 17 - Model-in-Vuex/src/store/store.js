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