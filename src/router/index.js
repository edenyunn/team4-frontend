import { createRouter, createWebHistory } from 'vue-router'
import Timeline from '@/views/Timeline.vue'
import Search from '@/views/Search.vue'
import Vibe from '@/views/Vibe.vue'
import Cast from '@/views/Cast.vue'
import Original from '@/views/Original.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Timeline
    },
    {
      path: '/movies',
      component: Timeline
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/vibe',
      component: Vibe
    },
    {
      path: '/original',
      component: Original
    },
    {
      path: '/cast',
      component: Cast
    },
  ]
})

export default router
