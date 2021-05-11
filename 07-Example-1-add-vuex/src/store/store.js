import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            {name:'Apple', qtn:30},
            {name:'Ball', qtn:30},
             {name:'Cat', qtn:30},
             {name:'Dog', qtn:30}
             ]
    }
});