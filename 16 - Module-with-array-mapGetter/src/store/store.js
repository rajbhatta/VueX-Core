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