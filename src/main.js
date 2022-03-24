import Vue from "vue";
import App from "./App.vue";
import TypeNav from "@/components/TypeNav";
Vue.config.productionTip = false;

//引入mock
import '@/mock/mockServer';
//引入路由
import router from "@/router";
//引入仓库
import store from "@/store";

Vue.component(TypeNav.name, TypeNav);
new Vue({
  render: (h) => h(App),
  //注册路由
  router,
  //注册仓库:组件实例的身上会多一个属性$store
  store,
}).$mount("#app");
