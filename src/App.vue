<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/movies">Movie</RouterLink>
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
