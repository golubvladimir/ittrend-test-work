import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    lang: 'ru',
    posts: [
      {
        id: '1',
        title: 'Пост 1',
        content: `Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Fusce tempor velit justo, sit 
                  amet congue nulla pharetra nec. Duis porttitor 
                  egestas ante eu tristique. Maecenas sit 
                  amet volutpat diam, a.`
      },
      {
        id: '2',
        title: 'Пост 2',
        content: `Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Fusce tempor velit justo, sit 
                  amet congue nulla pharetra nec. Duis porttitor 
                  egestas ante eu tristique. Maecenas sit 
                  amet volutpat diam, a.`
      }
    ],
    currentPost: {}
  },
  mutations: {
    changeLang(state, data) {
      state.lang = data.lang
    },
    selectPost(state, data) {
      state.currentPost = state.posts.find(item => item.id === data.id)
    }
  },
  actions: {
    changeLang(context, data) {
      context.commit('changeLang', data)
    },
    getSelectPost(context, data) {
      context.commit('selectPost', data)
    }
  }
});

export default store;
