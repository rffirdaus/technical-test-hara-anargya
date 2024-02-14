import { createRouter, createWebHistory } from 'vue-router';
import Container from './containers/layout.vue';
import Dashboard from './pages/dashboard/index.vue';
import Overview from './pages/overview/index.vue';

const routes = [
  {
    path: '',
    name: 'Container',
    component: Container,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/overview',
        name: 'Overview',
        component: Overview,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;