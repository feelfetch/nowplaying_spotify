<template>
  <div id="app">
    <SpotifyNowPlaying/>
  </div>
</template>

<script>
import SpotifyNowPlaying from './components/NowPlaying.vue'

export default {
  name: 'App',
  components: {
    SpotifyNowPlaying
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
