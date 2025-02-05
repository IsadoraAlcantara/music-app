import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/playlist',
          name: 'Playlist',
          component: () => import('../views/PlaylistView.vue')
        },
        {
          path: '/gender',
          name: 'Gender',
          component: () => import('../views/GenderView.vue')
        },
      ],
    },
  ],
});

export default router;