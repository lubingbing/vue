// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import Seller from 'components/seller/seller';
import Ratings from 'components/ratings/ratings';
import Goods from 'components/goods/goods';

import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueResource);
const routes = [
  { path: '/seller', component: Seller },
  { path: '/ratings', component: Ratings },
  { path: '/goods', component: Goods }
];
const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'active'
});
/*eslint-disable*/
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app');
router.push('/goods');
