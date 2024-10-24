import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Timeline from '@/views/Timeline.vue'
import Match from '@/views/Match.vue'
import Prompt from '@/views/Prompt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/movies',
      component: Timeline
    },
    {
      path: '/match',
      component: Match
    },
    {
      path: '/prompt',
      component: Prompt
    },
  ]
})

export default router
