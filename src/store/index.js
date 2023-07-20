import { createStore } from "vuex";

export default createStore({
  state: {
    contents: [],
    editorList: [],
  },
  getters: {},
  mutations: {
    getContents(state, payload) {
      state.contents = payload;
      state.editorList = payload.filter((item) => item.editor);
    },
  },
  actions: {},
  modules: {},
});
