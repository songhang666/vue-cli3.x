import Vue from "vue";
import "amfe-flexible"; //750设计稿量多少写多少
import "normalize.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
Vue.prototype.axios = Axios;
//来关闭生产模式下给出的提示
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
