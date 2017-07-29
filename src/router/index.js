import Vue from 'vue';
import VueMaterial from 'vue-material';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import '../../node_modules/vue-material/dist/vue-material.css';

Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
  ],
});
