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