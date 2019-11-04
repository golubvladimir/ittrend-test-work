import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    lang: 'ru',
    posts: [
      {
        id: '1',
        title: {
          ru: 'Пост 1',
          en: 'News 1'
        },
        content: {
          ru: `Но явные признаки победы институционализации будут преданы 
              социально-демократической анафеме. И нет сомнений, что сделанные
              на базе интернет-аналитики выводы и по сей день остаются 
              уделом либералов, которые жаждут быть подвергнуты
          целой серии независимых исследований.`,
          en: `Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Fusce tempor velit justo, sit 
              amet congue nulla pharetra nec. Duis porttitor 
              egestas ante eu tristique. Maecenas sit 
              amet volutpat diam, a.`,
        }
      },
      {
        id: '2',
        title: {
          ru: 'Пост 2',
          en: 'News 2'
        },
        content: {
          ru: `Но явные признаки победы институционализации будут преданы 
              социально-демократической анафеме. И нет сомнений, что сделанные
              на базе интернет-аналитики выводы и по сей день остаются 
              уделом либералов, которые жаждут быть подвергнуты
              целой серии независимых исследований.`,
          en: `Lorem ipsum dolor sit amet, consectetur 
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
