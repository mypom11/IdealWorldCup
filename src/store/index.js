import { createStore } from "vuex";

export default createStore({
  state: {
    contents: [],
    editorList: [],
    item: {},
    host: process.env.VUE_APP_HOST,
    imgHost: process.env.VUE_APP_HOST_IMAGE,
  },
  getters: {},
  mutations: {
    getContents(state, payload) {
      state.contents = payload;
      state.editorList = payload.filter((item) => item.editor);
    },
    setItem(state, payload) {
      state.item = payload;
    },
  },
  actions: {},
  modules: {},
});
