import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageMain',
      component: () => import(/* webpackChunkName: "main-page" */ '@/views/PageMain/PageMain.vue'),
    },
    {
      path: '/auth',
      name: 'PageAuth',
      component: () => import(/* webpackChunkName: "auth-page" */ '@/views/PageAuth/PageAuth.vue'),
    },
  ],
});
