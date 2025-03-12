import { createRouter, createWebHistory } from 'vue-router';
import Index from '../layouts/Index.vue';
import Home from '../Views/Home/HomePage.vue';

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: Home
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
