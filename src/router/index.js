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
          path: '/song-list',
          name: 'Song-list',
          component: () => import('../views/SongListView.vue')
        },
        {
          path: '/gender-list',
          name: 'Gender-list',
          component: () => import('../views/GenderListView.vue')
        },
        {
          path: '/playlist',
          name: 'Playlist',
          component: () => import('../views/PlaylistListView.vue')
        },
        {
          path: '/artist',
          name: 'Artist',
          component: () => import('../views/ArtistListView.vue')
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../layouts/BlanckLayout.vue'),
      children: [
        {
          path: '/login',
          name: 'Login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    }
  ],
});

export default router;