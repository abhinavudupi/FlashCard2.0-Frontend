import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Dashboard from '../views/dashboard.vue';
import Deckview from '../views/deckview.vue';
import Review from '../views/review.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/deckview',
    name: 'deckview',
    component: Deckview,
  },
  {
    path: '/review',
    name: 'review',
    component: Review,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
