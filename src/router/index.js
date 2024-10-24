import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Timelinefigma from '@/views/Timelinefigma.vue'
import Match from '@/views/Match.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/movies',
      component: Timelinefigma
    },
    {
      path: '/match',
      component: Match
    },
  ]
})

export default router
