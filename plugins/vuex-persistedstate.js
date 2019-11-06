import createPersistedState from 'vuex-persistedstate'

export default ({store}) => createPersistedState({
  filter: (mutation) => mutation.type === 'changeLang',
  reducer: (state) => ({lang: state.lang}),
})(store)

