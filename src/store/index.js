import Vue from "vue";
import Vuex from "vuex";
//Vue应用Vuex
Vue.use(Vuex);

import home from "./home";
import search from "./search";
//对外暴露Store类的一个实例
export default new Vuex.Store({
  modules: {
    home,
    search,
  },
});
