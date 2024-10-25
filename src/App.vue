<template>
  <nav>
    <RouterLink to="/match">Match</RouterLink>
    <RouterLink to="/movies">Timeline</RouterLink>
    <RouterLink to="/cast">Cast</RouterLink>
    <RouterLink to="/original">Original</RouterLink>
    
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
