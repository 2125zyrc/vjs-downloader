<template>
  <div id="app">
    <h1>Video.js Download Plugin Demo</h1>
    <VideoPlayer />
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer.vue';

export default {
  name: 'App',
  components: {
    VideoPlayer
  }
};
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin-bottom: 30px;
}
</style> 