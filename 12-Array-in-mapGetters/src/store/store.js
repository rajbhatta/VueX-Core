import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
      sportsArraysState: [
        { id: 1, text: 'This is my text', done: true },
        { id: 2, text: 'This is another text', done: false }
      ]
    },
    getters: {
      getSportsArray: state => {
        return state.sportsArraysState
      }
    }
  });