# What is module in VueX #
- Due to using a single state tree, all states of our application are contained inside one big object. However, as our application grows in scale, the store can get really bloated.

- To help with that, Vuex allows us to divide our store into modules. Each module can contain its own state, mutations, actions, getters, and even nested modules - it's fractal all the way down:

```js
const moduleA = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: () => ({ ... }),
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a 
store.state.b 
```

- A module is just a store, and you write it exactly like a store, except you don’t use Vuex.Store. Instead, you define it as a normal object. Take a look at the example below, a simple authentication store. You can save the code below in /store/auth.js.

```js
import axios from 'axios'
const auth = {
  state: {
    userdata: null
  },
  mutations: {
    login (state, payload) {
    state.userdata = payload
  },
  logout (state) {
    state.userdata = null
  }
  },
  actions: {
    authenticate ({ commit }, { username, password }) {
    axios({
      method: 'post',
    url: '/my/backend/url',
    data: {
      username: username,
      password: password
    }
    })
      .then(response => {
      if (response.status === 200) {
        commit('login', response.data)
      }
  }
  },
  getters: {
    loggedIn. function (state) {
    return state.userdata !== null
  }
  }
}
export default auth
```

## Including modules in the Store ##
Now the next part of our Vuex Modules tutorial: including a module in the store. Including a module is as simple as defining the modules attribute. Your Vuex Store will look something like this:

```js
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    auth,
    // other modules here ...
  }
})
```
