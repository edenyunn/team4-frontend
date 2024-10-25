import { createRouter, createWebHistory } from 'vue-router'
import Timeline from '@/views/Timeline.vue'
import Search from '@/views/Search.vue'
import Inside from '@/views/Inside.vue'
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
      path: '/inside',
      component: Inside
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
