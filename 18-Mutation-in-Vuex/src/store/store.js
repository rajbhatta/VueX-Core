import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state: {
      products:[
        {name:'Bana', price:20},
        {name:'Appy',price:30},
        {name:'Organe',price:60},
        {name:'Lemon',price:80}
      ]
    },
    getters: {
      saleProducts: state => {
        var saleProduct=state.products.map(product =>{
          return {
            name: '***'+product.name+'***',
            price: product.price/2
          }
        })
        return saleProduct;
      }
    },
    mutations: {
      reducePrice: state=> {
        state.products.forEach(product => {
          product.price -= 1;
        })
      }
    }
  
  });