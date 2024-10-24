<template>
  <nav>
    <RouterLink to="/match">Match</RouterLink>
    <RouterLink to="/movies">Timelinefigma</RouterLink>
    <RouterLink to="/movies">Cast</RouterLink>
    <RouterLink to="/movies">Original</RouterLink>
    
  </nav>
  <RouterView />
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'

export default {

}
</script>

<style scoped>
</style>
