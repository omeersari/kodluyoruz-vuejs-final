import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: 'final-app'
})
export default new Vuex.Store({
  state: {
    bookList: [],
    user: []
  },
  getters: {
    getBookList: state => state.bookList,
    getUserList: state => state.user
  },
  mutations: {
    addNewBook(state, book) {
      state.bookList.push(book);
    },
    setUser(state, userData) {
      userData.selectedBook.haveUser = true;
      state.user.push(userData);
    },
    deleteBook(state, book) {
      const index = state.bookList.indexOf(book);
      state.bookList.splice(index, 1);
    },
    getUser(state, userDat) {
      userDat.selectedBook.haveUser = false;
      const index = state.user.indexOf(userDat)
      state.user.splice(index, 1)
    }
  },
  actions: {},
  modules: {},
  plugins: [vuexLocal.plugin]
});
